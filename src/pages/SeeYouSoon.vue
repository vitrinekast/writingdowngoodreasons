<script setup>
import Page from '@/components/Page.vue';
import { isClient } from '@vueuse/core';
import { onMounted, ref } from 'vue';

const showExit = ref(false);

onMounted(() => {
    console.log("mounting", document.fullscreenElement);
    if (document && document.fullscreenElement) {
        showExit.value = true;
    }
})

const toggleFullScreen = () => {
    if (window.location.hostname === "localhost") return false;
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

</script>

<template>
    <main class="background--blue">
        <Page type="end">
            <img loading='lazy' src="@assets/ch-end/text.webp" alt="" class="frame__asset-text">
            <h5 style="margin-top: 2.5rem">Created by <a href="https://www.instagram.com/niksfilmrol/">niksfilmrol</a>

                and <a href="https://www.instagram.com/vitrinekast/">vitrinekast</a></h5>

            <nav class="nav--bottom">
                <router-link class="button button--light"  to="/">Play again</router-link>
                <div class="button--link" v-if="showExit" @click="document.exitFullscreen()">Toggle full screen</div>
            </nav>
        </Page>

    </main>
</template>

<style scoped></style>