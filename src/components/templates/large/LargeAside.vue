<script setup>
import { onMounted } from 'vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
// import CameraOutline from 'vue-material-design-icons/CameraOutline.vue';
// import DiamondStone from 'vue-material-design-icons/DiamondStone.vue';
// import HumanMale from 'vue-material-design-icons/HumanMale.vue';
// import HumanFemale from 'vue-material-design-icons/HumanFemale.vue';

import LogoTitle from '@/components/templates/LogoTitle.vue';

import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore();

onMounted(async () => {
    await categoryStore.getCategories();
});

</script>
<template>
    <div class="logo_and_menu">
        <logo-title class="mb-2" />
        <div class="divider" />
        <div class="menu">
            <router-link to="/">
                <HomeOutline size=30 /> Home
            </router-link>
            <router-link v-for="category in  categoryStore.categories " :key="category.id"
                :to="`/produtos/categoria/${category.id}`">
                <i class="icon mdi" :class="category.icon"></i> {{ category.name }}
            </router-link>
        </div>
    </div>
    <logo-title />
</template>
<style scoped>
.mb-2 {
    margin-bottom: 1.5rem;
}

.icon {
    font-size: 2rem;
    align-self: center;

}

.divider {
    margin-top: 1.rem;
    border-top: 1px solid #EEEEEE;
}

.menu {
    padding: 3rem;
}

.menu a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;
    gap: 1rem;
    font-size: 1.3rem;
    margin-top: 2.2rem;
}
</style>