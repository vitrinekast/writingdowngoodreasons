
import { defineStore } from 'pinia';

export const usePreloadStore = defineStore('preloadStore', {
    state: () => ({
        loaded: false,
        progress: 0,
        waitCount: 0,
        finishWaitingCount: 0,
    }),
    actions: {
        incrementWaitlist(by) {
            console.log("store: incrementing the waitlist by", by ? by : 1);
            this.waitCount += by ? by : 1;
            this.checkProgress();
        },
        oneDoneWaiting() {
            console.log("Store: 1 has finished waiting");;
            this.finishWaitingCount += 1;
           

            this.checkProgress();
        },
        checkProgress() {
            if(this.waitCount === 0 && this.finishWaitingCount === 0) {
                this.loaded = true;
                console.log("nothing to load")
                return false;
            }
            this.progress = (this.finishWaitingCount / this.waitCount);
            
            if (this.progress >= 1) {
                console.log("is the line actually empty?");
                this.loaded = true;
            } else {
                this.loaded = false;
            }
        }
    },
});
