<script setup lang="ts">
import { Transition, ref, watch } from 'vue';

const props = defineProps({
    src: { type: String, required: false },
})

const shown = ref(false);

watch(
    () => props.src,
    () => { console.log(props.src); shown.value = true }
);


</script>

<template>

    <Transition>
        <div class="lightbox" v-if="src && shown" >
            <img :src="src" class="lightbox__img fn-lightbox-img" alt="">
            <a class="button lightbox__close" @click="shown = false">
                sluit
            </a>
        </div>
    </Transition>
</template>

<style scoped></style>