<script setup>
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue';
import CartOutline from 'vue-material-design-icons/CartOutline.vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import Menu from 'vue-material-design-icons/Menu.vue';
</script>
<template>
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
        <RouterLink to="/">
            <Menu size="25" fillColor="#282828" />
            Menu
        </RouterLink>
    </div>
</template>
<style scoped>
.icons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.icons a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #282828;
    font-size: 1rem;
    transition: color 0.3s;
}
</style>