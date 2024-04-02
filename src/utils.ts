export const BEM = (base, modifier) => {
  return modifier ? `${base}--${modifier}` : "";
};

export const isMobile = () => {
  if(navigator) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  } else {
    return false;
  }
}
