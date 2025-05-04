import { isClient } from "@vueuse/core";
import {
	EffectCreative,
	HashNavigation,
	Keyboard,
	Navigation,
} from "swiper/modules";

export const BEM = (base, modifier) => {
	return modifier ? `${base}--${modifier}` : "";
};

export const swiperModules = [
	Keyboard,
	EffectCreative,
	Navigation,
	HashNavigation,
];

export const swiperParam = {
	speed: 400,
	slidesPerView: "auto",
	keyboard: true,
	direction: "vertical",
	modules: swiperModules,
	initialSlide: 0,
	pagination: false,
	navigation: false,
	grabCursor: true,
	injectStyles: [
		`
.swiper-button-next svg, .swiper-button-prev svg {
  display: none;
}

`,
	],
};

export const randBetween = (min, max)  =>
  Math.floor(Math.random() * (max - min + 1) + min);


export const mapNumRange = (num, inMin, inMax, outMin, outMax) =>
	((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

export const setThemeColor = (color) => {
	if (isClient) {
		var theme = document.querySelector('meta[name="theme-color"]');
		if (theme) {
			theme.setAttribute("content", color);
		}
	}
};

export const colors = {
	blue: "#025354",
	prikbord: "#839E96",
	body: "#e8e3d1",
};
