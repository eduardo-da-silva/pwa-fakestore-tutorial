<script setup>
import ProductList from '@/components/ProductList.vue';

const props = defineProps(['category_id']);
</script>

<template>
  <product-list :category_id="props.category_id" />
</template>
