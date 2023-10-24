import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

const cart = defineStore('cart', () => {
    const URL = 'https://dummyjson.com/products';

    const items = reactive([]);
    const totalItems = computed(() => items.length);

    async function add(product){
        items.push(product);
        console.log('Product added to cart');
    }

    async function remove(product){

    }
    

    return { items, totalItems, add }
})

export default cart;