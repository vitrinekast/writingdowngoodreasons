import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', {
    state: () => {
        return {
            sample: false,
            muted: useLocalStorage('muted', false),
            background: false
        }
    },
    getters: {
        getCached: (state) => {
            return (sample) => state.historyCache[sample]
        },
        current: (state) => 'haiah',
    },
    actions: {
        mute: () => {
            this.muted = true;
        },
        unmute: () => {
            this.muted = false;
        },
        toggle() {
            if(this.muted) {
                this.muted = false;
            } else {
                this.muted  = true;
            }
            // this.muted = !this.muted;
        },
        playBackground(sample) {
            this.background = sample;
        },
        play(sample) {
            console.log("store.js: received a new sample", sample);

            if (this.sample === sample) {
                console.log("store.js: its already in the state. lets trigger a restart");
                this.sample = false;
            }

            this.sample = sample;
        },
        store(sample) {
            this.history.push(sample);
        },
        storeCached(sample, src) {
            console.log("store.js: just received an audio src to store");
            this.historyCache[sample] = src;

            console.log(this.historyCache);
        }
    },
})