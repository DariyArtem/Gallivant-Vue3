<template>
  <div class="header__text">
    <my-header-description/>
    <my-header-subtitle/>
  </div>
</template>

<script>
import MyHeaderDescription from "@/components/MyHeaderDescription";
import MyHeaderSubtitle from "@/components/MyHeaderSubtitle";

export default {
name: "MyHeaderText",
   components: {
    MyHeaderSubtitle,
     MyHeaderDescription
   }
}
</script>

<style scoped>
.header__text{
  margin: 0 auto;
}
</style>