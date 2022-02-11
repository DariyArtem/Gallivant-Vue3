<template>
  <div class="background-gradient"></div>
</template>

<script>
export default {
name: "MyBackgroundGradient"
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
</style>