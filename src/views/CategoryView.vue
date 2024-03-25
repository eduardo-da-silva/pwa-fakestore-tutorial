<script setup>
import ProductList from '@/components/ProductList.vue';

const props = defineProps(['category']);


</script>

<template>
  <product-list :category="props.category" />
</template>
