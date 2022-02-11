<template>
  <img src="http://gallivant/img/header/background.png" alt="">
</template>

<script>
export default {
name: "MyBackgroundImage"
}
</script>

<style scoped>
img{
  z-index: -2;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>