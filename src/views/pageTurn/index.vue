<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
//swiper相关
import { swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'vuedemo',
  components: {
    swiper,
    SwiperSlide,
  },
  data: () => ({
    swiperOptions: {
      notNextTick: true,
      direction: 'vertical',
      grabCursor: true,
      setWrapperSize: truee,
      autoHeight: true,
      slidesPreview: 1,
      mousewheel: false,
      mousewheelControl: false,
      height: window.innerheight,
      resistanceRatio: 0,
      observeParents: true,
      // Some Swiper option/callback...
    },
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style></style>
