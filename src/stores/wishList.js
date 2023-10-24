import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

const wishList = defineStore('wishList', () => {
    const URL = 'https://dummyjson.com/products';

    const items = reactive([]);
    const totalItems = computed(() => items.length);

    async function add(product){
        items.push(product);
        console.log('Product added to WishList');
    }

    async function remove(product){

    }    

    return { items, totalItems, add, remove }
})

export default wishList;