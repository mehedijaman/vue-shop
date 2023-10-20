<script setup>
import HomeHeaderVue from '../components/HomeHeader.vue';
import TopNewArrival from '../components/product/TopNewArrival.vue';
import CallToAction from '../components/CallToAction.vue';
import FeaturedProducts from '../components/product/FeaturedProducts.vue';
</script>

<template>
  <div class="overflow-x-hidden bg-gray-50">
    <HomeHeaderVue></HomeHeaderVue>
    <TopNewArrival></TopNewArrival>
    <CallToAction></CallToAction>
    <FeaturedProducts></FeaturedProducts>    
  </div>
  
</template>

<style></style>