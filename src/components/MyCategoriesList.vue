<template>
  <div class="container">
    <div class="categories__list">
      <div class="swiper">
        <div class="swiper-wrapper">
          <my-category
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
import MyCategory from "@/components/MyCategory";
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
Swiper.use([Navigation, Pagination])

export default {
  name: "MyCategoriesList",
  props:{
    categories: {
      type: Array,
      required: true
    }
  },
  components: {
    MyCategory,
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

.swiper-pagination-bullet{
  width: 18px;
  height: 18px;
  background: #FFA902;
  opacity: 0.3;
}
.swiper-pagination-bullet-active{
  width: 18px;
  height: 18px;
  background: #FFA902;
  opacity: 1;
}
.categories__list{
  position: relative;
}
img {
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.swiper-button-next{
  top: 50%;
  right: -60px;
  display: block;
}
.swiper-button-prev{
  top: 50%;
  left: -80px;
  display: block;
}
.swiper-button-next:after, .swiper-button-prev:after{
  content: none;
}
.centered {
  width: 100%;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.swiper-pagination{
  margin-top: 50px;
  position: relative;
}

.swiper-slide {
  height: 221px;
  width: 170px;
}
@media only screen and (max-width: 991px) {
  .swiper-button-prev, .swiper-button-next{
    display: none;
  }
}

</style>