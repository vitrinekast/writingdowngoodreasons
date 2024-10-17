<script setup lang="ts">
	import { bus } from "@/helpers/eventBus";
	import { ref } from "vue";

	const src = ref(null);
	const id = ref(null);

	const close = () => {
		bus.emit("lightboxclose", id);
		src.value = null;
		id.value = null;
	};

	bus.on("showLightbox", (data) => {
		src.value = data.src;
		id.value = data.id;
	});
</script>
<template>
	<Transition name="fade">
		<div
			class="lightbox"
			v-if="src">
			<img
				:src="src"
				class="lightbox__img fn-lightbox-img"
				alt="" />
			<a
				class="button lightbox__close"
				@click="close">
				X
			</a>
		</div>
	</Transition>
</template>
