<template>
<div class="header__row">
  <div class="header__logo">
    <img src="http://gallivant/img/header/logo.png" alt="">
  </div>
  <my-header-search/>
  <my-header-icons/>
</div>
</template>

<script>
import MyHeaderSearch from "@/components/MyHeaderSearch";
import MyHeaderIcons from "@/components/MyHeaderIcons";
export default {

  name: "MyHeaderRow",
  components: {
    MyHeaderSearch,
    MyHeaderIcons,
  }
}
</script>

<style scoped>
.header__logo{
  flex: 0 0 168px;
}
.header__row{
  padding-top: 25px;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  display: flex;
  --bs-gutter-x: 1.5rem;
  align-items: center;
}
</style>