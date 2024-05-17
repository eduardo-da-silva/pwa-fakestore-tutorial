<script setup>
import { ref, onMounted } from "vue";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from '@/plugins/firebase'

const vapidKey = import.meta.env.VITE_VAPID_KEY

let token = ref();

onMessage(messaging, (payload) => {
  navigator.serviceWorker.ready.then((registration) => {
    const options = {
      body: payload.data.body,
      icon: 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png',
    };
    registration.showNotification(payload.data.title, options);
  });
});

const fetchToken = async () => {
  try {
    const currentToken = await getToken(messaging, { vapidKey })
    if (currentToken) {
      token.value = currentToken;
      // Send the token to your server and update the UI if necessary
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }
  catch (err) {
    console.log('An error occurred while retrieving token. ', err);
    err.value = err
  }
}

onMounted(() => {
  fetchToken()
})

</script>

<template>
  <p>TOKEN</p>
  <p>{{ token }}</p>
  <p>1645</p>
  <router-view />
</template>
