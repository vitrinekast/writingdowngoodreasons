<script setup>
	import Page from "@/components/Page.vue";
	import Frame from "@/components/Frame.vue";
	import { onMounted, onUnmounted, ref } from "vue";
	import { mapNumRange, randBetween } from "@/helpers/utils";
	import { register } from "swiper/element/bundle";
	import { swiperParam } from "@/helpers/utils";
	import "swiper/css";

	register();

	const slider = ref(null);
	const activeIndex = ref(0);

	const updateActiveIndex = (e) =>
		(activeIndex.value = event.detail[0].activeIndex);

	const country_image = import.meta.glob("@assets/ch-2/countries/crop_*.webp", {
		eager: true,
		import: "default",
	});

	const t_image = import.meta.glob("@assets/ch-2/countries/t_*.webp", {
		eager: true,
		import: "default",
	});

	onMounted(() => {
		Object.assign(slider.value, {
			...swiperParam,
			modules: [],
			speed: 800,
			direction: "vertical",
			autoPlay: true,
			slidesPerView: 1,
			delay: 1000,
			navigation: true,
			touchStartPreventDefault: false,
		});
		slider.value.initialize();
		slider.value.addEventListener(
			"swiperslidechangetransitionstart",
			updateActiveIndex
		);

		slider.value.addEventListener(
			"swiperslidechangetransitionend",
			updateActiveIndex
		);
	});
</script>

<template>
	<main>
		<Page size="sm">
			<div class="countries">
				<img
					src="@assets/ch-2/countries/lines.webp"
					alt=""
					class="countries__lines"
				/>
				<swiper-container ref="slider" init="false">
					<swiper-slide v-for="(c, index, o) in country_image" :index="o">
						<img :src="c" />
					</swiper-slide>
				</swiper-container>
			</div>
			<div class="list--appear" :shown="activeIndex">
				<li
					class="item"
					v-for="(c, o, index) in t_image"
					:index="index"
					:data-active="activeIndex === index"
					:data-position="activeIndex < index ? 'prev' : 'next'"
				>
					<img :src="c" class="country-name" />
				</li>
			</div>
		</Page>
	</main>
</template>

<style>
	swiper-slide {
		height: 100%;
		width: 100%;
		margin-top: 0px;
	}

	swiper-container,
	.countries {
		aspect-ratio: 343/237;
		max-width: 100vw;
		position: relative;
		height: 100%;
		overflow: visible;
	}

	.countries {
		position: relative;
		width: 100%;
		mask-size: 100% 100%;
		mask-repeat: no-repeat;
		mask-position: center center;
		mask-image: url("@assets/ch-2/countries/frame_mask.svg");
	}

	.countries__lines {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.country-name {
		max-height: 50px;
	}
</style>
