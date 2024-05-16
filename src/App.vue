<script setup>
import { ref, onMounted } from "vue";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from '@/plugins/firebase'

const vapidKey = import.meta.env.VITE_VAPID_KEY

let token = ref();

// function randomNotification() {
//   const notifTitle = "Meu titulo";
//   const notifBody = `Algum texto aleatório`;
//   const notifImg = 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png';
//   const options = {
//     body: notifBody,
//     icon: notifImg,
//   };
//   navigator.serviceWorker.ready.then(function (registration) {
//     registration.showNotification(notifTitle, options);
//   });
// }

// const app = initializeApp(firebaseConfig);

// onBackgroundMessage(messaging, (payload) => {
//   console.log('Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title + 'background';
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png',
//   };

//   navigator.serviceWorker.ready.then((registration) => {
//     registration.showNotification(notificationTitle, notificationOptions);
//   });
// });

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




// getToken(messaging, { vapidKey }).then((currentToken) => {
//   if (currentToken) {
//     // Send the token to your server and update the UI if necessary
//     token.value = currentToken;
//   } else {
//     console.log('No registration token available. Request permission to generate one.');
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
// });


</script>

<template>
  <p>TOKEN</p>
  <p>{{ token }}</p>
  <p>1800</p>
  <router-view />
</template>
