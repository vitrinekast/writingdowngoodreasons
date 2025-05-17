<script setup>
	import Frame from "@/components/Frame.vue";
	import Page from "@/components/Page.vue";
	import { swiperParam } from "@/helpers/utils";
	import "swiper/css";
	import { register } from "swiper/element/bundle";
	import { onMounted, ref } from "vue";

	register();
	const pageC = ref(null);
	const spreadC = ref(null);
	const showNudge = ref(true);
	const anyBlur = ref(3);

	const onClickAnything = () => {
		anyBlur.value = 0;
	};
	onMounted(() => {
		Object.assign(pageC.value, {
			...swiperParam,
			speed: 1200,
			touchStartPreventDefault: false,
			draggable: false,
			cssMode: false,
			centeredSlides: true,
			hashNavigation: {
				replaceState: true,
			},
			breakpoints: {
				768: {
					freeMode: true,
				},
			},
		});
		pageC.value.initialize();

		pageC.value.addEventListener("swiperslidechange", (event) => {
			// hide the nudge on slide 3
			showNudge.value = event.detail[0].activeIndex != 3;
		});
	});
</script>
<template>
	<main>
		<swiper-container
			ref="pageC"
			init="false">
			<swiper-slide
				class="slide--auto"
				data-swiper-parallax>
				<Page size="sm">
					<p class="text--left">
						Thomas and Noa went straight to bed when we got back Eefje and I
						stayed up. We talked about so many things that night. Lying on the
						bed looking out at the fog, the doors of the van open. We discussed
						Eefje's synaesthesia, my fascination with the cold. and the pictures
						on the walls of her van.<br />
						I described how the cold makes my head Clear. How ! wanled to be in
						the glacier that day. l imagined it would be so peaceful lo be a
						pârt of nature, entirely engulfed by it frozen in time. I thought of
						an ice-cold dive in the glacier lake and how it would immediately
						sort out everything in my life I was confused about. l imagined it
						would line my priorities right up. <br />We smoked cigarettes out
						the back of the van. The fos was so thick we couldn't see
						<span
							@click="onClickAnything"
							class="anything"
							:style="`filter: blur(${anyBlur}px)`"
							>anything</span
						>.
					</p>
				</Page>
			</swiper-slide>

			<swiper-slide
				data-swiper-parallax
				class="slide--auto">
				<Page size="sm">
					<Frame
						size="sm"
						swiper-parallax-item>
						<img
							class="frame__asset--contain"
							src="@assets/ch-2/countries/crop_switzerland.webp"
							alt="" />
					</Frame>
				</Page>
			</swiper-slide>

			<swiper-slide
				class="slide--auto"
				data-swiper-parallax>
				<Page size="sm">
					<p class="text--left">
						I woke up early the next day, as usual, hoping to see the sunrise
						over the glacier. It was Still quite dark and incredibly misty. Dark
						shapes were grazing in the distance. Occasionally their bells made
						some noise. As the sunlight started making its way through the fog,
						the cows gotcloser to our Cars. The cowbells woke Thomas ч p: "What
						on earth is that?!?" he exclaimed as he cracked open the car window.
					</p>
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
		</swiper-container>
	</main>
</template>
<style>
	.anything {
		transition: filter 1s linear;
	}
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
		animation-delay: 0s;
		animation-timing-function: linear;
		animation-duration: 1s;
		animation-fill-mode: forwards;
	}
	.cow_ding-2 {
		right: 20%;
		width: 30px;
		transform: rotate(-5deg);
		animation-delay: 0.5s;
	}

	.cow_ding-3 {
		right: 20%;
		top: 50%;
		width: 30px;
		transform: rotate(50deg);
		animation-delay: 0.7s;
	}

	.swiper-slide-active .cow_ding {
		animation-iteration-count: 1;

		animation-name: ding;
	}
</style>
