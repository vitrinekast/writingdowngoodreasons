<script setup lang="ts">
const props = defineProps({
  to: { type: String, required: false, default: '/chapter-1/page-2.html' }
})

</script>

<template>
    <swiper-slide class="slide--250">
        <h5>Wow you've unlocked the next chapter</h5>
        
        <router-link :to="props.to" class="button">Next</router-link>
    </swiper-slide>

</template>

<style scoped>


.slide--250 {
    height: 350px !important;
    display: flex;
    flex-direction: column;
}

h5 {
    margin-bottom: 1rem;
    color: var(--blue);
}
</style>