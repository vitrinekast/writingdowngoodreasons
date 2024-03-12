export const BEM = (base, modifier) => {
  return modifier ? `${base}--${modifier}` : "";
};
