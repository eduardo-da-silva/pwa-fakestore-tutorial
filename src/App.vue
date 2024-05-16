<script setup>
import { ref } from "vue";

import { getToken, onMessage } from "firebase/messaging";
import { onBackgroundMessage } from 'firebase/messaging/sw'
import { messaging } from '@/plugins/firebase'


let token = ref();
let err = ref('aqui')

function randomNotification() {
  const notifTitle = "Meu titulo";
  const notifBody = `Algum texto aleatório`;
  const notifImg = 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png';
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  navigator.serviceWorker.ready.then(function (registration) {
    registration.showNotification(notifTitle, options);
  });
}

const notify = () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
    err.value = result
  }).catch((error) => {
    err.value = error
  });
}

// const app = initializeApp(firebaseConfig);

onBackgroundMessage(messaging, (payload) => {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title + 'background';
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png',
  };

  navigator.serviceWorker.ready.then((registration) => {
    registration.showNotification(notificationTitle, notificationOptions);
  });
});

// const messaging = getMessaging(app)
onMessage(messaging, (payload) => {
  navigator.serviceWorker.ready.then(function (registration) {
    const options = {
      body: payload.notification.body,
      icon: 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png',
    };
    registration.showNotification(payload.notification.title, options);
  });
  // console.log('Message received. ', payload)
  // options.title = payload.notification.title
  // show(options)
  // alert(payload.notification.body)
  // enviar para o browser
  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  //   icon: '/logo.png'
  // };

  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
});


getToken(messaging, { vapidKey: 'BEakebcC5zrjPmNenyQooajjaw1-sQcQ6xCC3htaOE-44Q1w7VIbcRlfoH9MXw7TGj29ZbTR7taMO2iNog1674Y' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    token.value = currentToken;
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});


</script>

<template>
  <p>TOKEN</p>
  <p>{{ token }}</p>
  <p>{{ err }}</p>
  <div v-if="isSupported">
    <button @click="notify">
      Notify
    </button>
  </div>
  <div v-else>
    The Notification Web API is not supported in your browser.
  </div>
  <router-view />
</template>
