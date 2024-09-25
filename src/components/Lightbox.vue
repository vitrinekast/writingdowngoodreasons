<script setup lang="ts">
import { onMounted, ref } from 'vue';
const emit = defineEmits(['close']);
const model = defineModel()

onMounted(() => {
    console.log(model);
})

const close = () => {
    model.value = false;
    emit('close');
}

</script>
<template>
    <Transition>
        <div class="lightbox" v-if="model">
            <img :src="model" class="lightbox__img fn-lightbox-img" alt="">
            <a class="button lightbox__close" @click="close">
                sluit
            </a>
        </div>
    </Transition>
</template>