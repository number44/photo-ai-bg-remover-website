import { createApp } from "vue";
import App from "./App.vue";
import anime from "animejs";
createApp(App).mount("#app");
import "./styles.scss";

const header = document.querySelector("header") as HTMLElement;

import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value

lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }: any) => {
  console.log({ scroll, limit, velocity, direction, progress });
  console.log("progress", progress);
  console.log("scroll", scroll);
  console.log("velocity", velocity);

  if (scroll > 150 && header) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function raf(time: any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const preloader = document.querySelector("#preloader") as HTMLElement;
const img2 = document.querySelector(".img2") as HTMLElement;
window.onload = function () {
  // Hide the preloader once the page has finished loading
  if (!preloader) return;
  preloader.style.display = "none";
  if (!img2) return;
  img2.classList.add("showed");
};

var images = document.querySelectorAll(".img-thumb");
var timeline = anime.timeline();

// define the animation properties
var animationProperties = {
  scale: [0, 1],
  easing: "easeOutQuad",
  duration: 1000,
};

// add the animation to the timeline with a staggered delay
timeline.add({
  targets: images,
  ...animationProperties,
  delay: anime.stagger(600),
});

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
