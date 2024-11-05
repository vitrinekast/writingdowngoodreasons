<script setup>
	import Page from "@/components/Page.vue";
	import { bus } from "@/helpers/eventBus";
	import { onMounted, ref } from "vue";
	const outlineImg = ref();

	onMounted(() => {
		bus.emit("playBackground", "bg__intro");

		import(`@assets/ch-intro/frame_outline.svg`).then((imageImports) => {
			outlineImg.value = imageImports.default;
		});
	});
</script>

<template>
	<main>
		<Page type="fixed">
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
			</div>
		</Page>
	</main>
</template>
<style></style>
