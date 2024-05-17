<script setup>
import ProductList from '@/components/ProductList.vue';
import { useMessagingStore } from '@/stores/messaging'
const messagingStore = useMessagingStore()
</script>

<template>
  <p>TOKEN</p>
  <p>{{ messagingStore.token }}</p>
  <p>1705</p>
  <product-list />
</template>
