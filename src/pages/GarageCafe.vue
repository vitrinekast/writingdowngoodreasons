<script setup>
	import Page from "@/components/Page.vue";
	import { bus } from "@/helpers/eventBus";
	import { onMounted } from "vue";

	onMounted(() => {
		bus.emit("playBackground", "bg__intro");
	});
</script>

<template>
	<main>
		<Page type="fixed">
			<div class="intro frame">
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
				<img
					class="frame__asset intro__text intro__text--bottom"
					src="@assets/ch-intro/intro_bottom.webp"
					alt="" />
			</div>
		</Page>
	</main>
</template>
<style></style>
