<template>
  <div class="swiper-slide">
    <router-link to="#">
      <img v-bind:src="category.img_path" alt="">
    </router-link>
    <div class="centered">{{ category.name }}</div>
  </div>
</template>

<script>
export default {
name: "MyCategory",
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