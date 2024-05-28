<script setup>
// import { onMounted } from "vue";
// import { PassageUser } from '@passageidentity/passage-elements/passage-user'

// const passageUser = new PassageUser()

// import ProductList from '@/components/ProductList.vue';
import { ref } from 'vue';
import { useMessagingStore } from '@/stores/messaging'
const messagingStore = useMessagingStore()

const perm = ref('')
const refresh = async () => {
  const permission = await Notification.requestPermission();
  perm.value = permission
  if (permission === 'granted') {
    messagingStore.getToken()
  }
}

// onMounted(async () => {
//   const user = await passageUser.userInfo()
//   if (user) {
//     console.log('User is signed in')
//     console.log(user)
//   } else {
//     console.log('User is signed out')
//   }
// })

</script>

<template>
  <p>TOKEN</p>
  <p>{{ messagingStore.token }}</p>
  <p>1406 - {{ perm }}</p>
  <button @click="refresh">Refresh</button>
  <input autofocus type="text">
  <product-list />
</template>
