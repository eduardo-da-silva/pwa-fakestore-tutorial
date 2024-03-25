<script setup>
import Magnify from 'vue-material-design-icons/Magnify.vue';
import LogoTitle from '@/components/templates/LogoTitle.vue';

</script>

<template>
    <logo-title class="pl-0" />
    <div class="icons">
        <Magnify />
    </div>
</template>

<style scoped>
.pl-0 {
    padding-left: 0rem;
}

.icons {
    display: flex;
    gap: 1rem;
    align-items: center;
}
</style>