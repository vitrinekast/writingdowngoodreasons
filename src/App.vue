<script setup lang="ts">
	import { ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import AudioPlayer from "./components/AudioPlayer.vue";
	import ParticleContainer from "./components/ParticleContainer.vue";

	const router = useRouter();
	const route = useRoute();
	const routerTransition = ref("page");

	router.beforeEach((to, from) => {
		const fromOrder = from.meta.order;
		const toOrder = to.meta.order;

		if (fromOrder < toOrder) {
			routerTransition.value = "page";
		} else {
			routerTransition.value = "page-back";
		}
	});
</script>

<template>
	<header>
		<AudioPlayer />
	</header>
	<router-view v-slot="{ Component }">
		<transition
			:name="routerTransition"
			:page-name="route.name"
			:duration="routerTransition === 'page' ? 12000 : 3000">
			<component :is="Component" />
		</transition>
	</router-view>
	<ParticleContainer />
</template>
