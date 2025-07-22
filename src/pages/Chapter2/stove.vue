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
	import { Transition } from "vue";
	import { onMounted } from "vue";
	import { ref } from "vue";
	const knob = ref(null);
	const lid = ref(null);
	const heat = ref(null);
	const knobHeat = ref(null);
	const isDragging = ref(false);
	const framey = ref(null);
	const gameTimerPassed = ref(0);
	const duration = 10000;
	let gameTimer;

	const state = ref(0);
	// states: off (0), cooking (1), boiling (2), won (3)

	const handleStateChange = (val) => {
		if (val) state.value = val;
		if (gameTimer) gameTimer.pause();

		console.log("handleStateChange", state.value);

		// if the game is idle
		if (state.value === 0) {
			animate(knobHeat.value, {
				opacity: 0,
				easing: "easeOut",
				duration: 300,
			});

			animate(heat.value, {
				opacity: 0,
				duration: 500,
			});
		}

		if (state.value === 0 && !isDragging.value) {
			animate(knob.value, {
				rotate: [{ to: 0, duration: 10 }, { to: 15, duration: 100 }, { to: 0 }],
				loop: true,
				loopDelay: 800,
			});
		}
		if (state.value === 1) {
			// start the game timer
			gameTimer = createTimer({
				duration: duration,
				onComplete: (self) => handleStateChange(2),
				onUpdate: (self) => (gameTimerPassed.value = self.currentTime),
				onBegin: (self) => (gameTimerPassed.value = self.currentTime),
			});

			// Slowly display heat behind the knob
			animate(knobHeat.value, {
				opacity: 1,
				duration: duration,
			});

			animate(heat.value, {
				opacity: 1,
				duration: duration,
			});

			let amplitude = 2; // starting angle

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
						amplitude *= 1.1;

						if (state.value === 1) {
							startWiggle();
						} else {
							animate(lid.value, {
								rotate: 0,
								duration: 800,
							});
						}
					},
				});
			}

			startWiggle();
		}

		if (state.value === 2) {
			animate(heat.value, {
				translateY: 20,
				opacity: {
					from: 0.8,
					to: 1,
				},
				loop: true,
				alternate: true,
				duration: 100,
			});

			animate(lid.value, {
				translateY: -150,
				scale: 1.2,
				duration: 1000,
			});
		}

		if (state.value === 3) {
			animate(heat.value, {
				opacity: 0,
				duration: 1000,
			});

			animate(knobHeat.value, {
				opacity: 0,
				duration: 800,
			});

			animate(lid.value, {
				rotate: 0,
				duration: 400,
			});

			animate(lid.value, {
				translateY: 0,
				scale: 1,
				duration: 400,
			});
		}
	};

	onMounted(() => {
		console.log("i am mohnted");

		utils.set(knob.value, {
			scale: "var(--scale)",
		});

		createDraggable(knob.value, {
			y: { mapTo: "rotate" },
			container: [-300, 0, 0, 0],
			modifier: utils.clamp(-180, 0),
			snap: 16,
			x: false,
			onSnap: (a) => {
				if (a.progressY < 0.5 && state.value === 0) {
					handleStateChange(1);
				}
			},
			onGrab: () => (isDragging.value = true),
			onRelease: () => {
				isDragging.value = false;
				handleStateChange(state.value === 3 || state.value === 2 ? 3 : 0);
				animate(knob.value, {
					rotate: 0,
					duration: 400,
				});
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

		handleStateChange();
	});
</script>
<template>
	<main>
		<Page size="sm">
			<h2>State: {{ state }} timer: {{ gameTimerPassed }}</h2>

			<Frame class="relative">
				<div
					class="heat"
					ref="heat">
					<div class="heat__inner"></div>
				</div>
				<img
					ref="framey"
					src="@assets/ch-2-stove/stove.webp"
					class="frame__asset transition" />

				<div
					class="lid"
					ref="lid">
					<img
						src="@assets/ch-2-stove/lid_crop.webp"
						draggable="false" />
				</div>
				<div
					class="knob"
					ref="knob"
					:is-dragging="isDragging">
					<div
						class="heat"
						ref="knobHeat"></div>
					<img
						src="@assets/ch-2-stove/knob_crop.webp"
						draggable="false" />
				</div>

				<Transition name="bottom">
					<nav
						class="nav--bottom"
						v-if="state === 3">
						<router-link
							class="button button--dark"
							to="/chapter-2"
							>Done</router-link
						>
					</nav>
				</Transition>
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
		opacity: 0;
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
		--scale: 1;
		width: 15%;
		left: 15%;
		top: 62.3%;
		transition: 0.1s linear;
	}

	.knob .heat {
		filter: blur(10px);
		width: 100%;
		left: 0;
		top: 0;
		height: 100%;
		z-index: 2;
		transform: scale(0.4);
	}

	.knob[is-dragging="true"] {
		--scale: 1.2;
	}
</style>
