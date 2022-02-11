<template>
  <div class="background">
    <my-background-image/>
    <my-background-gradient/>
  </div>
</template>

<script>
import MyBackgroundImage from "@/components/MyBackgroundImage";
import MyBackgroundGradient from "@/components/MyBackgroundGradient";
export default {
name: "MyBackground",
  components:{
    MyBackgroundGradient,
    MyBackgroundImage
  }
}
</script>

<style scoped>
.background{
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -3;
  top: 0;
}
</style>