<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router'

import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';
import CartOutline from 'vue-material-design-icons/CartOutline.vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import Account from 'vue-material-design-icons/Account.vue'
import Menu from 'vue-material-design-icons/Menu.vue';

const showMenu = ref(false)

onBeforeRouteUpdate(() => {
    showMenu.value = false
})

</script>
<template>
    <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
        <RouterLink to="/">
            <HomeOutline size="25" fillColor="#282828" />
            Home
        </RouterLink>
        <RouterLink to="/login">
            <Account size="25" fillColor="#282828" />
            Login
        </RouterLink>
    </div>
    <div class="icons">
        <RouterLink to="/">
            <HomeOutline size="25" fillColor="#282828" />
            Home
        </RouterLink>
        <RouterLink to="/">
            <AccountCircleOutline size="25" fillColor="#282828" />
            Perfil
        </RouterLink>
        <RouterLink to="/">
            <CartOutline size="25" fillColor="#282828" />
            Carrinho
        </RouterLink>

        <div class="hamburger" @click="showMenu = !showMenu">
            <Menu size="25" fillColor="#282828" />
            Menu
        </div>
    </div>
</template>
<style scoped>
#footerMenu {
    position: fixed;
    bottom: 15%;
    right: 0;

    width: 20%;
    border-top: #EEEEEE 1px solid;
    background-color: white;

    display: block;
    padding: 1rem;
}

#footerMenu a {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-decoration: none;
    color: #282828;
    font-size: 1rem;
    transition: color 0.3s;
}


.icons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.icons a,
.icons .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #282828;
    font-size: 1rem;
    transition: color 0.3s;
}

.hamburger:hover {
    cursor: pointer;
}
</style>