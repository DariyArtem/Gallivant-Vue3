<template>
  <div class="swiper-slide">
    <router-link to="#">
      <img class="categories__category-image" v-bind:src="'http://gallivant/storage/'+category.img_path" alt="">
    </router-link>
    <div class="centered">{{ category.name }}</div>
  </div>
</template>

<script>
export default {
name: "Category",
  props:{
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>


</style>