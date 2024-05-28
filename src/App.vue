<script setup>
import { onMounted } from "vue";
import { onMessage } from "firebase/messaging";
import { messaging } from '@/plugins/firebase'

import { useMessagingStore } from '@/stores/messaging'
const messagingStore = useMessagingStore()

onMessage(messaging, (payload) => {
  navigator.serviceWorker.ready.then((registration) => {
    const options = {
      body: payload.data.body,
      icon: 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png',
    };
    registration.showNotification(payload.data.title, options);
  });
});

onMounted(() => {
  messagingStore.getToken()
})

</script>

<template>
  <router-view />
</template>
