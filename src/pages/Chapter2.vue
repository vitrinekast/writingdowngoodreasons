<script setup>
import Page from "@/components/Page.vue";
import Frame from "@/components/Frame.vue";
import Prikbord from "@/components/Prikbord.vue";


</script>

<template>
    
    <Prikbord></Prikbord>

    
    <Page msg="page--fullwidth">
        <div class="frame frame--scroller fn-reveal-container">
            <img class="frame__asset" src="/src/assets/images/chapter_2/frame_1/asset.png" alt="">
            <img class="frame__element frame__revealable fn-reveal-element" reveal-position=".4"
                src="/src/assets/images/chapter_2/frame_1/element--feet.png" alt="">
        </div>
    </Page>

    <section class="page--fullwidth">
        <div class="frame frame--scroller">
            <img class="frame__asset" src="/src/assets/images/chapter_2/frame_1/asset.png" alt="">
            <img class="frame__element frame__element--feet " reveal-position="50%"
                src="/src/assets/images/chapter_2/frame_1/element--feet.png" alt="">
        </div>
    </section>
</template>

<style scoped></style>
