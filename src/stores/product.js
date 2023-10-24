import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

const product = defineStore('product', () => {
    const URL = 'https://dummyjson.com/products';

    const items = ref([]);

    async function getProducts(){
        const res = await fetch(URL);
        const data = await res.json();

        items.value = data.products;
    }

    return { items, getProducts }
})

export default product;