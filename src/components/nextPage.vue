<script setup lang="ts">
const props = defineProps({
    to: { type: String, required: false, default: '/chapter-1/page-2' },
    push: { type: Boolean, required: false, default: false }
})
</script>
<template>
    <router-link :class="`button--next ${props.push ? 'push' : ''}`" :to="props.to" class="button--next"></router-link>
</template>
<style scoped>
.button--next {
    position: fixed;
    bottom: calc(env(safe-area-inset-bottom, 20px) + 16px);
    right: calc(env(safe-area-inset-top, 20px) + 22px);
    z-index: 999;
    width: 80px;

    background-position: right;

    .push {
        bottom: env(safe-area-inset-bottom, 20px);
        transform: translate3d(0, 012px, 0);
    }
}
</style>