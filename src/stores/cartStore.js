import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification'
const toast = useToast();

const baseURL = 'https://dummyjson.com';

const useCartStore = defineStore('cart', () => {

    const items = reactive([]);
    const totalItems = computed(() => items.length);

    async function add(product){
        items.push(product);
        toast.success("Product added to cart!");
    }

    async function remove(product){

    }
    

    return { items, totalItems, add }
})

export default useCartStore;