<template>
  <div class="background">
    <img src="@/assets/background.png" alt="">
    <div class="background-gradient"></div>
  </div>
</template>

<script>

export default {
name: "MyBackground",
}
</script>

<style scoped>
.background-gradient {
  height: 100vh;
  top: 0;
  width: 100%;
  position: absolute;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
}
img{
  z-index: -2;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.background{
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -3;
  top: 0;
}
</style>