<script setup lang="ts">


</script>

<template>
    <swiper-slide class="smaller">
        <h5>Wow you've unlocked the next chapter</h5>
        
        <router-link to="/chapter-1/page-2" class="button">Next</router-link>
    </swiper-slide>

</template>

<style scoped>


.smaller {
    height: 350px !important;
    display: flex;
    flex-direction: column;
}

h5 {
    margin-bottom: 1rem;
    color: var(--blue);
}
</style>