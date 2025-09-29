<script setup lang="ts">
	const props = defineProps({
		to: { type: String, required: false, default: "/chapter-1/page-2" },
		push: { type: Boolean, required: false, default: false },
	});
</script>
<template>
	<router-link
		:class="`button--next ${props.push ? 'push' : ''}`"
		:to="props.to"></router-link>
</template>
<style scoped>
	.button--next {
		position: fixed;
		bottom: calc(env(safe-area-inset-bottom, 20px) + 16px);
		right: calc(env(safe-area-inset-right, 20px) + 22px);
		z-index: 999;
		width: 80px;
		background-position: center right;
		height: 50px;
		background-size: 60%;
	}

	.button--next.push {
		bottom: env(safe-area-inset-bottom, 20px);
		transform: translate3d(0, 012px, 0);

		@media screen and (min-width: 800px) {
		    bottom: calc(env(safe-area-inset-bottom, 20px) + 16px);
		    right: 10%;
		}

	}
</style>
