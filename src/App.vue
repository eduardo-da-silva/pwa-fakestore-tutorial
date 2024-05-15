<script setup>
import { ref, reactive } from "vue";

import { getToken, onMessage } from "firebase/messaging";
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
// import { onBackgroundMessage } from 'firebase/messaging/sw'
import { useWebNotification } from '@vueuse/core'
// import type { UseWebNotificationOptions } from '@vueuse/core'

const options = reactive({
  title: 'Hello, world from VueUse!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
})

const {
  isSupported,
  show,
} = useWebNotification(options)

const firebaseConfig = {
  apiKey: 'AIzaSyAVfvqj1wUrjRpdlRoWc_fep474lG2-5Ms',
  authDomain: 'fakestore-tutorial.firebaseapp.com',
  projectId: 'fakestore-tutorial',
  storageBucket: 'fakestore-tutorial.appspot.com',
  messagingSenderId: '341042937156',
  appId: '1:341042937156:web:722a1402ccf2b0d09b2b11',
  measurementId: 'G-NHRFLWXHPC'
}

const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app)

let token = ref();


// const app = initializeApp(firebaseConfig);


// const messaging = getMessaging(app)
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  options.title = payload.notification.title
  show(options)
  alert(payload.notification.body)
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
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then(function (registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function (err) {
        console.log('Service worker registration failed, error:', err);
      });
  }

  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    token.value = currentToken;

    console.log("Token is:", currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }

}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


</script>

<template>
  <p>TOKEN</p>
  <p>{{ token }}</p>
  <div>
    <p>
      Supported: {{ isSupported ? 'Yes' : 'No' }}
    </p>
  </div>

  <div v-if="isSupported">
    <button @click="show(options)">
      Show Notification
    </button>
  </div>
  <div v-else>
    The Notification Web API is not supported in your browser.
  </div>
  <router-view />
</template>
