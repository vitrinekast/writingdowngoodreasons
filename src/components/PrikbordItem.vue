<script setup></script>
<template>
	<div
		class="menu__frame"
		:style="{ 'z-index': topElement === 1 ? 10 : 2 }">
		<img
			class="frame__asset--contain"
			:src="`${folder}/photo_1.webp`"
			alt=""
			@click="onClick('audio__plants-move', 'photo_1.webp', 1)" />

		<Nudge
			:nudge="'photo'"
			v-if="progress.length == 0" />
	</div>
</template>
