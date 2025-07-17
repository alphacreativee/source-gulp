import { preloadImages } from "../../libs/utils.js";
// setup lenis
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
// end lenis
const init = () => {
  gsap.registerPlugin(ScrollTrigger);
};
preloadImages("img").then(() => {
  // Once images are preloaded, remove the 'loading' indicator/class from the body

  init();
});
$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
// Khởi tạo LazyLoad
const lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
  // Callback khi ảnh được load
  callback_loaded: function (element) {
    element.classList.add("loaded");
  },
});
