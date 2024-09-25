import { Keyboard, Mousewheel, EffectCreative, Navigation } from "swiper/modules";

export const BEM = (base, modifier) => {
  return modifier ? `${base}--${modifier}` : "";
};

export const swiperModules = [Keyboard, Mousewheel, EffectCreative, Navigation];

export const swiperParam = {
  speed: 400,
  slidesPerView: "auto",
  keyboard: true,
  direction: "horizontal",
  mousewheel: true,
  modules: swiperModules,
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
