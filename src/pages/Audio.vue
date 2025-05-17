<script setup>
	import Page from "@/components/Page.vue";
	import { bus } from "@/helpers/eventBus";
	import { useAudioStore } from "@/store/audio";
	import { useRoute } from "vue-router";

	const route = useRoute();
	const nextPage = route.meta.next;

	const audio = useAudioStore();
	const onClick = () => {
		audio.toggle();
		bus.emit("playSample", "page-flip");
	};
</script>

<template>
	<main>
		<Page>
			<button
				class="button--audio"
				:class="audio.muted ? 'off' : 'on'"
				@click="onClick"></button>
			<p
				class="message text--center"
				style="margin-bottom: 1rem; margin-top: 2rem">
				For a more engaging experience, <br />please increase your volume.
			</p>
			<nav class="nav--bottom">
				<router-link
					class="button"
					:to="nextPage"
					>Continue</router-link
				>
			</nav>
		</Page>
	</main>
</template>

<style scoped></style>
