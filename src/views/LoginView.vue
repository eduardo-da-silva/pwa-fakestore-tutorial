<script setup>
// import '@passageidentity/passage-elements/passage-auth'
import axios from 'axios';
import { reactive, ref } from 'vue'

const user = reactive({
  email: 'admin@admin.com',
  password: 'admin'
})

const token = ref('')

const login = async () => {
  console.log('login')
  try {
    const { data } = await axios.post('https://web-6uo05kdzu892.up-de-fra1-k8s-1.apps.run-on-seenode.com/token/', user)
    token.value = data.access
  } catch (error) {
    token.value = error
  }
}

// const user = await passageUser.signIn(user.email, user.password)
//




</script>
<template>
  <h1>Login</h1>
  <div class="authContainer">
    <label for="email">Email</label>
    <input type="email" v-model="user.email" id="email">
    <label for="email">Senha</label>
    <input type="password" v-model="user.password" id="email">
    <button @click="login">Login</button>
  </div>
  Token: {{ token }}
</template>

<style></style>
