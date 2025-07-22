<script setup>
	import Frame from "@/components/Frame.vue";
	import Page from "@/components/Page.vue";
	import {
		animate,
		createTimer,
		createSpring,
		createDraggable,
		utils,
	} from "animejs";
	import { onMounted } from "vue";
	import { ref } from "vue";
	const knob = ref(null);
	const lid = ref(null);
	const test = ref(null);
	const heat = ref(null);
	const isDragging = ref(false);

	const state = ref(0);
	let heatAnimation, lidAnimation;
	// states: off (0), cooking (1), boiling (2)

	const handleStateChange = () => {
		if (heatAnimation) {
			heatAnimation.pause();
		}

		if (lidAnimation) {
			lidAnimation.pause();
		}

		if (state.value === 0 && !isDragging.value) {
			animate(knob.value, {
				rotate: [{ to: 0, duration: 10 }, { to: 15, duration: 100 }, { to: 0 }],
				loop: true,
				loopDelay: 800,
			});
		}

		if (state.value === 1) {
			animate(knob.value, {
				rotate: {
					to: 180,
				},
				loop: false,
				duration: 500,
				loopDelay: 800,
			});
		}

		if (state.value === 1) {
			heatAnimation = animate(heat.value, {
				scale: {
					from: 0,
					duration: 500,
				},
				opacity: {
					from: 0,
				},
				duration: 10000,
			});
			let amplitude = 2; // starting angle

			animate(lid.value, {
				translateY: -25,
				scale: 1.2,
				duration: 20000,
				delay: 8000,
				easing: "easeInQuad",
			});

			function startWiggle() {
				animate(lid.value, {
					rotate: [
						{ to: utils.clamp(amplitude * -1, -20, 0), duration: 100 },
						{ to: utils.clamp(amplitude, 0, 20), duration: 100 },
						{ to: `0`, duration: 100 },
					],
					duration: 100,
					delay: amplitude > 3 ? 0 : 1000,
					easing: "easeInOutSine",
					onComplete: () => {
						console.log("amplitude", amplitude);
						amplitude *= 1.1; // grow amplitude
						startWiggle(); // repeat
					},
				});
			}

			startWiggle();
		}

		if (state.value === 2) {
			heatAnimation = animate(heat.value, {
				translateY: {
					to: 20,
				},
				opacity: {
					from: 0.8,
					to: 1,
				},
				loop: true,
				alternate: true,
				duration: 100,
			});

			lidAnimation = animate(lid.value, {
				rotate: -10,
				duration: 400,
				loop: true,
				alternate: true,
			});

			animate(lid.value, {
				translateY: -150,
				duration: 1000,
			});

			animate(lid.value, {
				scale: 1.2,
				duration: 1000,
			});
		}
	};

	const setState = (val) => {
		state.value = val;
		console.log("the new state is");
		handleStateChange();
	};

	onMounted(() => {
		console.log("i am mohnted");

		createDraggable(knob.value, {
			y: { mapTo: "rotate" },
			x: false,
			onGrab: () => {
				console.log("grab!");
			},
		});
		createDraggable(lid.value, {
		container: lid.value.parentNode,
			releaseEase: createSpring({
				stiffness: 12,
				damping: 60,
			}),
			snap: 0,
		});

		// animate(lid.value, {
		// 	translateY: -150,
		// 	duration: 1000,
		// });

		// animate(lid.value, {
		// 	scale: 1.2,
		// 	duration: 1000,
		// });

		handleStateChange();
	});
</script>
<template>
	<main>
		<Page size="sm">
			<h2 ref="test">State: {{ state }}</h2>
			<header>
				Set state to:
				<button @click="setState(0)">off</button>
				<button @click="setState(1)">cooking</button>
				<button @click="setState(2)">boiling</button>
			</header>
			<Frame class="relative">
				<div
					class="heat"
					ref="heat">
					<div class="heat__inner"></div>
				</div>
				<img
					src="@assets/ch-2-stove/stove.webp"
					alt=""
					class="frame__asset transition" />

				<div class="lid">
					<img
						src="@assets/ch-2-stove/lid_crop.webp"
						ref="lid"
						draggable="false"
						class="frame__element" />
				</div>
				<div class="knob">
					<img
						src="@assets/ch-2-stove/knob_crop.webp"
						class="frame__element"
						ref="knob"
						draggable="false" />
				</div>
			</Frame>
		</Page>
	</main>
</template>
<style>
	.heat,
	.heat__inner {
		position: absolute;
		width: 50%;
		background: firebrick;
		height: 100px;
		top: 45%;
		left: 25%;
		border-radius: 100%;
		filter: blur(50px);
		z-index: -1;
		transform: scale(0);
		-webkit-backface-visibility: hidden;
-moz-backface-visibility: hidden;
-webkit-transform: translate3d(0, 0, 0);
-moz-transform: translate3d(0, 0, 0);
	}
	.heat__inner {
		background: yellow;
		width: 25%;
		z-index: 22;
		transform: scale(0.8);
	}

	.knob,
	.lid {
		position: absolute;
	}
	.lid {
		width: 45%;
		left: 27%;
		top: 16%;
	}

	.knob {
		width: 15%;
		left: 15%;
		top: 62.3%;
	}

	.frame__inner {
		border: 1px solid blue;
		overflow: hidden;
	}
</style>
