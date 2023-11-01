import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification'
const toast = useToast();

const baseURL = 'https://dummyjson.com';

const useCartStore = defineStore('cart', () => {

    const items = reactive({});
    getCartFromLocalStorage();

    const totalItems = computed(()=>{
        let total = 0
        for(let id in items){
            total += items[id].quantity
        }
        return total
    });

    const totalPrice = computed(()=>{
        let total = 0
        for(let id in items){
            total += items[id].product.price * items[id].quantity
        }
        return parseFloat(total.toFixed(2))
    });

    async function add(product){
        if(items[product.id]){
            items[product.id].quantity++
        }else{
            items[product.id] = {
                product,
                quantity:1
            }
        }
        saveCartToLocalStorage()
        toast.success("Product added to cart!");
    }

    async function remove(product){
        if(items[product.id]){
            delete items[product.id];
            saveCartToLocalStorage();
            toast.success("Product removed from cart!");
        }
    }

    async function increase(product){
        if(items[product.id]){
            items[product.id].quantity++;
            saveCartToLocalStorage();
        }
    }

    async function decrease(product){
        if(items[product.id]){
            items[product.id].quantity--;
            if(items[product.id].quantity == 0){
                remove(product);
            }
            saveCartToLocalStorage();
        }
    }

    async function empty(){
        items = {};
        saveCartToLocalStorage();
        toast.success("Cart Cleared!");
    }
    
    function saveCartToLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(items))
    }
    function getCartFromLocalStorage(){
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        if (cartItems) {
            Object.assign(items, cartItems);
        }

        // items = JSON.parse(localStorage.getItem('cart')) || {}
    }

    async function applyCoupon(couponCode){
        // get coupon discount % from API
        const discoountParcent = 10;
        const discountedPrice = totalPrice - (totalPrice * discoountParcent/100);
    }

    return { items, totalItems, totalPrice, add, remove, increase, decrease, empty }
})

export default useCartStore;