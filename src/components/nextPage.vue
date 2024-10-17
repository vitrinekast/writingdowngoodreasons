<script setup lang="ts">
const props = defineProps({
    to: { type: String, required: false, default: '/chapter-1/page-2' }
})
</script>
<template>
    <router-link :to="props.to" class="button--next"></router-link>
</template>
<style scoped>
.button--next {
    position: fixed;
    bottom: env(safe-area-inset-bottom, 20px);;
    right: calc(env(safe-area-inset-top, 20px) + 22px);
    z-index: 999;
    width: 80px;
    transform: translate3d(0, 012px, 0);

    background-position: right;
}
</style>