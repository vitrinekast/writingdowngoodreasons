import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', {
    state: () => {
        return {
            muted: useLocalStorage('muted', false),
        }
    },
    actions: {
        mute () {
            this.muted = true;
        },
        unmute ()  {
            console.log(this);
            this.muted = false;
        },
        toggle() {
            if (this.muted) {
                this.muted = false;
            } else {
                this.muted = true;
            }
            // this.muted = !this.muted;
        }
    },
})