<script setup>
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
</script>
<template>
    <div class="links">
        <RouterLink to="/">Help</RouterLink>
        <RouterLink to="/">Contact Us</RouterLink>
        <RouterLink to="/">Privacy & Terms</RouterLink>
    </div>
    <div class="icons">
        <Facebook size="30" />
        <Twitter size="30" />
        <Instagram size="30" />
    </div>
</template>
<style scoped>
.links {
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 4rem;
    font-size: 1.2rem;
}

.links a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s;
}

.icons {
    padding-right: 3rem;
    display: flex;
    gap: 4rem;
    align-items: center;
}
</style>