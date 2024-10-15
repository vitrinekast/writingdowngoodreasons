<script setup>
import Page from '@/components/Page.vue';
import { ref } from 'vue';
import { useAudioStore } from '@/store/audio';
import { bus } from '@/helpers/eventBus';

const audio = useAudioStore();
const onClick = () => {
    audio.toggle();
    bus.emit("playSample", "page-flip");
}
</script>

<template>
    <main>
        <Page>
            <button class="button--audio" :class="audio.muted ? 'off' : 'on'" @click="onClick"></button>
            <p class='message text--center' style="margin-bottom: 1rem; margin-top: 2rem">For a more engaging experience, <br>please
                increase your volume.</p>
            <nav class="nav--bottom">
                <router-link class="button" to="/chapter-1/page-1">Continue</router-link>
            </nav>
        </Page>

    </main>
</template>

<style scoped></style>