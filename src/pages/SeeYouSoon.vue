<script setup>
	import Page from "@/components/Page.vue";
	import { onMounted, ref } from "vue";
	import { colors, setThemeColor } from "../helpers/utils";

	const showExit = ref(false);
	const showModal = ref(false);

	onMounted(() => {
		setTimeout(() => {
			setThemeColor(colors.blue);
		}, 1000);

		if (document && document.fullscreenElement) {
			showExit.value = true;
		}
	});

	const toggleFullScreen = () => {
		if (window.location.hostname === "localhost") return false;
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	};
</script>

<template>
	<main class="background--blue">
		<div class="modal--backdrop" v-if="showModal"></div>
		<div
			class="modal"
			v-if="showModal">
			<header class="modal__header">
				<h2>Signing up</h2>
				<div
					class="button--ic"
					@click="showModal = false">
					<span class="ic ic--close"></span>
				</div>
			</header>
			<h4>Step 1</h4>
			<p>Make the one time payment of €12,-, so I can buy the stamps and make the post cards.</p>
			<a
				href="https://tikkie.me/pay/caj7q82sihvu5nq2prct"
				target="_blank"
				class="button"
				>Complete payment (€12,-)</a
			>
			<h4>Step 2</h4>
			<p>Email me the address where you'd like to receive the post cards.</p>
			<a
				class="button button"
				href="mailto:nik@writingdowngoodreasons.com?subject=Subscribing to Writing Down Good Reasons&body=Hi Nik,%0D%0A  %0D%0A I've just paid your tikkie and I would love to receive your next cards. Please send them to my postal address: %0D%0A %0D%0A
				Street:%0D%0A 
				House Number:%0D%0A
				City:%0D%0A
				ZIP:%0D%0A %0D%0A
				Kind regards,
				%0D%0A
				 %0D%0A"
				>Send an email</a
			>

			<h4>Step 3</h4>
			<p>The next post card will come before the end of the year!</p>
		</div>
		<Page type="end">
			<h2>Writing Down Good Reasons</h2>
			<p>
				Is an interactive postal exchange by
				<a href="">Nik van der Meulen</a> and <a href="">Rosa Schuurmans</a>.
			</p>
			<p>
				Do you want to read more? Sign up for €12,- and receive the rest of the
				season via the post.
			</p>
			<p>I'll write you from 4 more countries.</p>

			<nav class="nav--bottom">
				<div
					class="button button--light"
					@click="showModal = true">
					I want to sign up
				</div>

				<router-link
					class="button button--link"
					to="/"
					>Play again</router-link
				>
				<div
					class="button--link"
					v-if="showExit"
					@click="toggleFullScreen">
					Toggle full screen
				</div>
			</nav>
		</Page>
	</main>
</template>

<style scoped>

	.modal .button--ic {
		position: absolute;
		top: 0;
		right: 0;
	}
	h2 {
		margin-bottom: 2rem;
	}
	p {
		display: block;
		margin-bottom: 1.5rem;
	}
	h4 {
		margin-top: 1rem;
	}
	.modal--backdrop {
		background: var(--blue);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
	}
	.modal {
		background: white;
		position: fixed;
		top: 50%;
		left: 1rem;
		right: 1rem;
		z-index: 20;
		border-radius: 1rem;
		padding: 1rem;
		transform: translate3d(0, -50%, 0px);
	}

	.modal__header {
		margin-bottom: 1rem;
		position: relative;
	}
</style>
