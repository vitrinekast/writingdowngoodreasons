<script setup>
	import { onMounted, ref } from "vue";
</script>
<template>
	<main>
		<h1>Chapter 2</h1>
		<ul>
			<li>
				<router-link to="/chapter-2/audio">Go to Audio</router-link>
			</li>
			<li>
				<router-link to="/chapter-2/stayed-up">Go to Stayed Up</router-link>
			</li>
			<li>
				<router-link to="/chapter-2/driving">Go to Driving</router-link>
			</li>
			<li>
				<router-link to="/chapter-2/countries">Go to Countries</router-link>
			</li>
			<li>
				<router-link to="/chapter-2/stove">Go to stove</router-link>
			</li>
		</ul>
	</main>
</template>

<style media="screen">
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
