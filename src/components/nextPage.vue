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
    bottom: calc(env(safe-area-inset-top, 20px) + 12px);
    right: calc(env(safe-area-inset-top, 20px) + 12px);
    z-index: 999;
    width: 100px;
}
</style>