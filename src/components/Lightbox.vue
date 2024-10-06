<script setup lang="ts">
const emit = defineEmits(['close']);
const model = defineModel({default: false})


const close = () => {
    model.value = false;
    emit('close');
}

</script>
<template>
    <Transition name="fade">
        <div class="lightbox" v-if="model">
            <img :src="model" class="lightbox__img fn-lightbox-img" alt="">
            <a class="button lightbox__close" @click="close">
                sluit
            </a>
        </div>
    </Transition>
</template>