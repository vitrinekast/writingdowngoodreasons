<script setup>
	import Page from "@/components/Page.vue";
	import { bus } from "@/helpers/eventBus";
	import { onMounted, ref } from "vue";
	import { colors, setThemeColor } from "../helpers/utils";

	const showIntro = ref(true);
	const outlineImg = ref(false);

	onMounted(() => {
		setThemeColor(colors.body);
		import(`@assets/ch-intro/frame_outline.svg`).then((imageImports) => {
			outlineImg.value = imageImports.default;
		});
	});

	const begin = () => {
		bus.emit("startAudio");

		setThemeColor(colors.body);

		if (window.location.hostname === "localhost") return false;
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	};
</script>

<template>
	<main>
		<Transition name="intro">
			<Page
				type="fixed"
				v-if="showIntro">
				<div class="intro frame">
					<img
						v-if="outlineImg"
						class="frame__outline"
						:src="outlineImg"
						alt="" />

					<img
						class="frame__asset frame__background"
						src="@assets/ch-intro/intro_bergen.webp"
						alt="" />
					<img
						class="frame__asset intro__text intro__text--top"
						src="@assets/ch-intro/intro_top.webp"
						alt="" />
					<img
						class="frame__asset intro__text intro__text--middle"
						src="@assets/ch-intro/intro_middle.webp"
						alt="" />
					<p class="intro__text text--center">
						By Nik van der Meulen & <br />
						Rosa Schuurmans
					</p>
					<nav class="nav--bottom">
						<router-link
							@click="begin"
							class="button"
							to="/chapter-1/audio"
							>Begin</router-link
						>
					</nav>
				</div>
			</Page>
		</Transition>
	</main>
</template>
