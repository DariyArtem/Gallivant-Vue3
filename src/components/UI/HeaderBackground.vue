<template>
  <div class="background">
    <img :src=" require('@/assets/'+background)" alt="">
    <div class="background-gradient"></div>
  </div>
</template>

<script>

export default {
name: "Background",
  props:{
    background:{
      type: String
    }
  }
}
</script>

<style scoped>

</style>