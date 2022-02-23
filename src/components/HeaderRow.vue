<template>
<div class="header__row">
  <div class="header__logo">
    <img src="http://gallivant/img/header/logo.png" alt="">
  </div>
  <header-search/>
  <header-icons/>
</div>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch";
import HeaderIcons from "@/components/HeaderIcons";
export default {

  name: "HeaderRow",
  components: {
    HeaderSearch,
    HeaderIcons,
  }
}
</script>

<style scoped>
</style>