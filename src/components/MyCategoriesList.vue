<template>
  <div class="container">
    <div class="categories__list">
      <swiper :slides-per-view="slidesPerView" :space-between="spaceBetween"  :breakpoints="breakpoints" @swiper="onSwiper"
              @slideChange="onSlideChange">
        <swiper-slide>
          <router-link to="#">
            <img src="../assets/categories/category1.png" alt="">
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="#">
            <img src="../assets/categories/category2.png" alt="">
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="#">
            <img src="../assets/categories/category3.png" alt="">
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="#">
            <img src="../assets/categories/category4.png" alt="">
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="#">
            <img src="../assets/categories/category5.png" alt="">
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="#">
            <img src="../assets/categories/category6.png" alt="">
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>

<script>
import MyCategory from "@/components/MyCategory";
// Import Swiper Vue.js components
import {Swiper} from 'swiper/vue/swiper';
import {SwiperSlide} from 'swiper/vue/swiper-slide'
// Import Swiper styles
import 'swiper/swiper.min.css';

export default {
  name: "MyCategoriesList",
  components: {
    MyCategory,
    Swiper,
    SwiperSlide,

  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 6,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3
        },
        // when window width is >= 575px
        575: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3
        },
        1199: {
          slidesPerView: 6,
          spaceBetween: 30,
          slidesPerGroup: 6
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.swiper {
  height: 300px;
}
</style>