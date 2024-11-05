<script setup lang="ts">
	import { computed, onMounted, ref } from "vue";
	import { useAudioStore } from "@/store/audio";
	import { bus } from "@/helpers/eventBus";
	import { useRoute } from "vue-router";

	const audio = useAudioStore();
	const sample = ref();
	const background = ref();
	const backgroundSample = ref();
	const route = useRoute();
	const currentRouteName = computed(() => route.name);

	onMounted(() => {
		canPlayAudio().then((isPlayable) => {
			if (!isPlayable && !audio.muted) {
				audio.mute();
			}
		});
	});

	function canPlayAudio() {
		const audio = document.createElement("audio");

		// You can set a valid audio source
		audio.src =
			"data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA=="; // short data URI for testing

		return new Promise((resolve) => {
			const playPromise = audio.play();

			if (playPromise !== undefined) {
				playPromise
					.then(() => {
						resolve(true);
					})
					.catch((error) => {
						console.info("Audio autoplay is blocked:", error);
						resolve(false);
					});
			} else {
				resolve(false);
			}
		});
	}

	bus.on("playSample", (name) => {
		if (audio.muted) return false;

		import(`@/assets/audio/${name}.mp3`).then((src) => {
			if (sample.value) {
				sample.value.pause();
			}

			sample.value = new Audio(src.default);
			sample.value.pause();
			sample.value.play();
			sample.value.onended = () => {
				// audio.play(false);
			};
		});
	});

	bus.on("startAudio", () => {
		canPlayAudio().then((isPlayable) => {
			if (!isPlayable && !audio.muted) {
				audio.mute();
			} else {
				audio.unmute();
			}
		});
	});

	bus.on("playBackground", (name) => {
		backgroundSample.value = name;

		if (audio.muted) {
			return false;
		}

		playBackground();
	});

	const playBackground = () => {
		if (!backgroundSample.value) return false;
		import(`@/assets/audio/${backgroundSample.value}.mp3`).then((src) => {
			if (background.value) {
				background.value.pause();
			}
			background.value = new Audio(src.default);
			background.value.pause();
			background.value.loop = true;
			background.value.play();
			background.value.volume =
				currentRouteName.value === "garagecafe" ? 0.8 : 0.2;
		});
	};

	const parseMutedState = (state) => {
		if (state.muted) {
			if (sample.value) {
				sample.value.pause();
			}
			if (background.value) {
				background.value.pause();
			}
		} else {
			playBackground();
		}
	};

	audio.$subscribe(
		(mutation, state) => {
			parseMutedState(state);
		},
		{ detached: false },
	);
</script>

<template>
	<nav
		class="nav--audio"
		:visible="
			currentRouteName != 'start' && currentRouteName != 'chapter-1-audio' && currentRouteName != 'chapter-1-page-3'
		">
		
		<button
			class="button--audio"
			:class="audio.muted ? 'off' : 'on'"
			@click="audio.toggle"></button>
	</nav>
</template>

<style scoped>
	.wrapper {
		display: none;
	}

	.button--icon {
		position: fixed;
		top: 1rem;
		right: 1rem;
		background-color: white;
		outline: none;
		color: blue;
		border: none;
		cursor: pointer;
	}

	.icon {
		width: 1rem;
		height: 1rem;
	}
</style>
