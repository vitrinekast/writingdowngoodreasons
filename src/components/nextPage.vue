<script setup lang="ts">
const props = defineProps({
    to: { type: String, required: false, default: '/chapter-1/page-2.html' }
})

</script>

<template>



    <router-link :to="props.to" class="button">Next</router-link>


</template>

<style scoped>
.button {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 999;
}
</style>