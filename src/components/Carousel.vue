<template>
  <vue-displacement-slideshow
    :images="images"
    displacement="https://images.pexels.com/photos/6690827/pexels-photo-6690827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    :intensity="0.2"
    :speedIn="1.4"
    :speedOut="1.4"
    ease="expo.out"
    ref="slideshow"
  />
</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";

export default {
  components: {
    VueDisplacementSlideshow,
  },
  computed: {
    images() {
      return [
        "https://images.pexels.com/photos/6690827/pexels-photo-6690827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6579996/pexels-photo-6579996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6690827/pexels-photo-6690827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ];
    },
  },
  methods: {
    init() {
      //We loop through all our images by calling the 'next' method of our component every 2 seconds
      setInterval(() => {
        this.$refs.slideshow.next();
      }, 2000);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
