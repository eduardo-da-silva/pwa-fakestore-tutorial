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
            <HomeOutline size="30" /> Home
            <CameraOutline size="30" /> Eletrônicos
            <DiamondStone size="30" /> Joias
            <HumanMale size="30" /> Masculino
            <HumanFemale size="30" /> Feminino
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
    display: grid;
    grid-template-columns: 1fr 5fr;

    padding: 3rem;
    gap: 1rem;
    font-size: 1.3rem;
}
</style>