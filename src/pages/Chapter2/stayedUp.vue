<script setup>
	import Frame from "@/components/Frame.vue";
	import Page from "@/components/Page.vue";
	import { swiperParam } from "@/helpers/utils";
	import "swiper/css";
	import { register } from "swiper/element/bundle";
	import { onMounted, ref } from "vue";

	register();

	const pageC = ref(null);
	const anyBlur = ref(3);
	const activeIndex = ref(0);
	const vanIsClosed = ref(false);

	const onClickAnything = () => {
		anyBlur.value = 0;
	};

	const onVanClick = () => {
		vanIsClosed.value = !vanIsClosed.value;
		setTimeout(() => {
			pageC.value.swiper.slideNext();
		}, 1000);
	};

	onMounted(() => {
		Object.assign(pageC.value, {
			...swiperParam,
			modules: [],
			speed: 1200,
			touchStartPreventDefault: false,
			draggable: false,
			cssMode: false,
			centeredSlides: true,
			hashNavigation: false,
			breakpoints: {
				768: {
					freeMode: true,
				},
			},
		});
		pageC.value.initialize();

		pageC.value.addEventListener("swiperslidechangetransitionend", (event) => {
			activeIndex.value = event.detail[0].activeIndex;
		});
	});
</script>
<template>
	<main>
		<swiper-container
			:allow-slide-next="vanIsClosed || activeIndex != 1"
			ref="pageC"
			init="false">
			<swiper-slide
				data-hash="1"
				class="slide--auto"
				data-swiper-parallax>
				<Page size="sm">
					<p
						class="text--left"
						v-scramble>
						When we returned from our walk to the glacier, we lit our gas stove
						and cooked some instant noodles. Our friends went straight to bed
						afterwards. Eefje and I stayed up, though. We talked for hours while
						lying on the bed and looking out at the fog. We opened the doors of
						the van.
					</p>
					<p
						class="text--left"
						v-scramble>
						We talked about Eefje’s synaesthesia, my love of the cold, and the
						pictures on the van's walls. I explained that the cold clears my
						head. I imagined how peaceful it would be to be frozen inside a
						glacier. To be part of nature, engulfed by it and frozen in time. I
						thought about taking an icy plunge into the glacier lake and how it
						would instantly resolve all the confusion in my life.
					</p>
					<p
						class="text--left"
						v-scramble>
						We talked for hours and smoked cigarettes at the back of the van.
						The fog was so thick that we couldn't see
						<span
							@click="onClickAnything"
							:style="`filter: blur(${anyBlur}px); transition: filter 1s linear;`"
							>anything.</span
						>.
					</p>
				</Page>
			</swiper-slide>

			<swiper-slide
				data-swiper-parallax
				data-hash="2"
				class="slide--auto">
				<Page size="sm">
					<Frame
						class="relative"
						mask="ch-2-stayedup-van"
						@click="onVanClick"
						outline="ch-2-stayedup-van">
						<img
							src="@assets/ch-2-stayedup-van/van_open.webp"
							alt=""
							:style="`opacity: ${vanIsClosed ? 0 : 1}`"
							class="frame__asset transition" />
						<img
							src="@assets/ch-2-stayedup-van/van_closed.webp"
							class="frame__asset absolute transition"
							:style="`opacity: ${vanIsClosed ? 1 : 0}`" />
					</Frame>
				</Page>
			</swiper-slide>

			<swiper-slide
				class="slide--auto"
				data-hash="3"
				data-swiper-parallax>
				<Page
					size="sm"
					class="text--left">
					<p>
						As usual, I woke up early the next day, hoping to see the sun rise
						over the glacier. It was still quite dark, and there was a thick
						mist. I could see dark shapes grazing in the distance. Occasionally,
						the sound of their bells could be heard. As the sunlight began to
						make its way through the fog, the cows came closer to our cars. The
						cowbells woke Thomas up.
					</p>
					<blockquote>'What on earth is that!?'</blockquote>
					<p>he exclaimed, cracking open the car window.</p>
				</Page>
			</swiper-slide>

			<swiper-slide
				data-swiper-parallax
				class="slide--auto">
				<Frame swiper-parallax-item>
					<img
						class="frame__asset--contain"
						src="@assets/ch-2/stayed-up/cow.webp"
						alt="" />

					<img
						class="frame__asset--contain cow_ding cow_ding-1"
						src="@assets/ch-2/stayed-up/ding_1.webp"
						alt="" />
					<img
						class="frame__asset--contain cow_ding cow_ding-2"
						src="@assets/ch-2/stayed-up/ding_2.webp"
						alt="" />
					<img
						class="frame__asset--contain cow_ding cow_ding-3"
						src="@assets/ch-2/stayed-up/ding_3.webp"
						alt="" />
				</Frame>
			</swiper-slide>

			<swiper-slide
				class="slide--xs background--base"
				data-swiper-parallax>
				<Page size="sm">
					<div class="grid grid--center">
						<Frame
							class="cell cell--w-3"
							outline="ch-2-stayedup-scold-left"
							mask="ch-2-stayedup-scold-left"
							swiper-parallax-item>
							<img
								src="@assets/ch-2-stayedup-scold-left/frame_asset.png"
								alt=""
								class="frame__asset--contain stretch" />
						</Frame>

						<Frame
							class="cell cell--w-3"
							outline="ch-2-stayedup-scold-right"
							mask="ch-2-stayedup-scold-right"
							swiper-parallax-item>
							<img
							src="@assets/ch-2-stayedup-scold-right/frame_asset.png"
								alt=""
								class="frame__asset--contain stretch" />
						</Frame>



						<!-- <Transition name="fade" :duration="2000">
							<nextPage
								to="/chapter-1/page-3"
								:push="true"
								v-if="showNextPage"
							/>
						</Transition> -->
					</div>
				</Page>
			</swiper-slide>
		</swiper-container>
	</main>
</template>
<style>
	@keyframes ding {
		from {
			transform: rotate(0deg) scale(0.5) translate3d(10px, -10px, 0);
			opacity: 0;
		}

		to {
			transform: rotate(-4deg) scale(1) translate3d(0px, 0px, 0);
			opacity: 1;
		}
	}

	.cow_ding {
		width: 40px;
		position: absolute;
		right: 30%;
		top: 40%;
		height: 50px;
		transform: rotate(5deg);
		opacity: 0;
		animation-delay: 2s;
		animation-timing-function: linear;
		animation-duration: 1s;
		animation-fill-mode: forwards;
	}

	.cow_ding-2 {
		right: 20%;
		width: 30px;
		transform: rotate(-5deg);
		animation-delay: 2.5s;
	}

	.cow_ding-3 {
		right: 20%;
		top: 50%;
		width: 30px;
		transform: rotate(50deg);
		animation-delay: 2.7s;
	}

	.swiper-slide-active .cow_ding {
		animation-iteration-count: 1;
		animation-name: ding;
	}
</style>
