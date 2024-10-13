<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from 'vue';
import { bus } from '../helpers/eventBus';
import { isClient } from '@vueuse/core';

const props = defineProps({
    nudge: { type: [String, Boolean], required: false },
})
let timeout;

const showNudge = ref(false);

const doNudge = () => {
    if (props.nudge) {
        showNudge.value = true;
        timeout = setTimeout(doNudge, 12000)
        setTimeout(() => {
            showNudge.value = false;
        }, 1000)
    }
}

watchEffect(() => {
    if (props.nudge && isClient) {
        setTimeout(doNudge, 12000)
    }
})

bus.on("extendNudge", () => {
    console.log("got the instruction to extend the nudge!");
    clearTimeout(timeout);
    setTimeout(doNudge, 12000)
})

</script>

<template>
    <div :class="`nudge nudge--${nudge}`" v-if="showNudge"></div>
</template>



<style scoped>
.frame--masked .things {
    mask-size: 100% 100%;
}
</style>