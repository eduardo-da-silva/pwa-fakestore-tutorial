<script setup>
import { onMounted, ref } from "vue";
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

const perm = ref('')

const getToken = async () => {
  const permission = await Notification.requestPermission();
  perm.value = permission
  if (permission === 'granted') {
    messagingStore.getToken()
  }
}

onMounted(() => {
  getToken();
  // messagingStore.getToken()
})

</script>

<template>
  <router-view />
</template>
