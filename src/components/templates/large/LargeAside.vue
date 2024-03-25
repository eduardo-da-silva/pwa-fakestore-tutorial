<script setup>
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import CameraOutline from 'vue-material-design-icons/CameraOutline.vue';
import DiamondStone from 'vue-material-design-icons/DiamondStone.vue';
import HumanMale from 'vue-material-design-icons/HumanMale.vue';
import HumanFemale from 'vue-material-design-icons/HumanFemale.vue';

import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>
<template>
    <div class="logo_and_menu">
        <logo-title class="mb-2" />
        <div class="divider" />
        <div class="menu">
            <router-link to="/">
                <HomeOutline size=30 /> Home
            </router-link>
            <router-link to="/categorias/eletronics">
                <CameraOutline size=30 /> Eletrônicos
            </router-link>
            <router-link to="/categorias/jewelery">
                <DiamondStone size=30 /> Joias
            </router-link>
            <router-link to="/categorias/men's clothing">
                <HumanMale size=30 /> Masculino
            </router-link>
            <router-link to="/categorias/women's clothing">
                <HumanFemale size=30 /> Feminino
            </router-link>
        </div>
    </div>
    <logo-title />
</template>
<style scoped>
.mb-2 {
    margin-bottom: 1.5rem;
}

.divider {
    margin-top: 1.rem;
    border-top: 1px solid #EEEEEE;
}

.menu {
    padding: 3rem;
}

.menu a {
    display: grid;
    grid-template-columns: 1fr 5fr;
    text-decoration: none;
    color: #000000;
    gap: 1rem;
    font-size: 1.3rem;
    margin-top: 2.2rem;
}
</style>