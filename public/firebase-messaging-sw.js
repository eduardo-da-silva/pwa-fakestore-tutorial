importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: 'AIzaSyAVfvqj1wUrjRpdlRoWc_fep474lG2-5Ms',
  authDomain: 'fakestore-tutorial.firebaseapp.com',
  projectId: 'faketore-tutosrial',
  storageBucket: 'fakestore-tutorial.appspot.com',
  messagingSenderId: '341042937156',
  appId: '1:341042937156:web:722a1402ccf2b0d09b2b11',
  measurementId: 'G-NHRFLWXHPC'
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  // Customize notification here
  const notificationTitle = 'Back Message Title'
  const notificationOptions = {
    body: payload.data.body,
    icon: 'https://pwa-fakestore-tutorial.vercel.app/assets/logo-fxZnRAhd.png'
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

// const messaging = firebase.messaging()
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAVfvqj1wUrjRpdlRoWc_fep474lG2-5Ms',
//   authDomain: 'fakestore-tutorial.firebaseapp.com',
//   projectId: 'fakestore-tutorial',
//   storageBucket: 'fakestore-tutorial.appspot.com',
//   messagingSenderId: '341042937156',
//   appId: '1:341042937156:web:722a1402ccf2b0d09b2b11',
//   measurementId: 'G-NHRFLWXHPC'
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
