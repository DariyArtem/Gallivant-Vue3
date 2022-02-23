<template>
  <div class="header__text">
    <header-description/>
    <header-subtitle/>
  </div>
</template>

<script>
import HeaderDescription from "@/components/HeaderDescription";
import HeaderSubtitle from "@/components/HeaderSubtitle";

export default {
name: "HeaderText",
   components: {
    HeaderSubtitle,
     HeaderDescription
   }
}
</script>

<style scoped>

</style>