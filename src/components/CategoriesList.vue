<template>
  <div class="container">
    <div class="categories__list">
      <div class="swiper">
        <div class="swiper-wrapper">
          <category-item
              v-for="category in categories"
              :category="category"/>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-button-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path
              d="M31.7777 23.5834L0.333356 23.5834L0.333357 18.4167L31.7777 18.4167L17.9207 4.55971L21.5735 0.906874L41.6667 21L21.5735 41.0932L17.9207 37.4404L31.7777 23.5834Z"
              fill="#141414"/>
        </svg>
      </div>
      <div class="swiper-button-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
          <path
              d="M20.2223 28.4166H51.6667V33.5833H20.2223L34.0793 47.4403L30.4265 51.0931L10.3333 31L30.4265 10.9068L34.0793 14.5596L20.2223 28.4166Z"
              fill="#141414"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryItem from "@/components/CategoryItem";
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
Swiper.use([Navigation, Pagination])

export default {
  name: "CategoriesList",
  props:{
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    CategoryItem,
    Swiper,
  },
  mounted() {
    new Swiper('.swiper', {
      // Default parameters
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
        // when window width is >= 575px
        580: {
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
    })
  },
}
</script>

<style>

</style>