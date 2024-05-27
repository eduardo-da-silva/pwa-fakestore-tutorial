<script setup>
// import '@passageidentity/passage-elements/passage-auth'
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue'

const user = reactive({
  email: 'admin@admin.com',
  password: 'admin'
})

const token = ref('')

// onMounted(async () => {
//   checkLocalLoginData()
// })

// const checkLocalLoginData = async () => {
//   console.log('oi')
//   const cred = await navigator.credentials.get()
//   console.log(cred)
//   if (cred) {
//     user.email = cred.id
//     user.password = cred.password
//     login()
//   }
// }

const login = async () => {
  console.log('login')
  try {
    const { data } = await axios.post('https://web-6uo05kdzu892.up-de-fra1-k8s-1.apps.run-on-seenode.com/token/', user)
    token.value = data.access
    const cred = new PasswordCredential({
      id: user.email,
      name: user.email,
      password: user.password,
    })
    await navigator.credentials.store(cred)
  } catch (error) {
    token.value = error
  }
}

// const user = await passageUser.signIn(user.email, user.password)
//




</script>
<template>
  <h1>Login with form2</h1>
  <div class="authContainer">
    <form @submit.prevent="() => { }">
      <label for="email">Email</label>
      <input type="email" v-model="user.email" id="email">
      <label for="password">Senha</label>
      <input type="password" v-model="user.password" id="password">
      <button @click="login">Login</button>
    </form>
  </div>
  Token: {{ token }}
</template>

<style></style>
