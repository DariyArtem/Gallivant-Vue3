<template>
<div class="header__nav-items">
  <router-link to="#">
    <my-nav-item>Home</my-nav-item>
  </router-link>
  <router-link to="#">
    <my-nav-item>Account</my-nav-item>
  </router-link>
  <router-link to="#">
    <my-nav-item>About Me</my-nav-item>
  </router-link>
  <router-link to="#">
    <my-nav-item>Categories</my-nav-item>
  </router-link>
  <router-link to="#">
    <my-nav-item>Contact Me</my-nav-item>
  </router-link>
</div>
</template>

<script>
import MyNavItem from "@/components/MyNavItem";

export default {
name: "MyNavItems",
  components: {
    MyNavItem
  }
}
</script>

<style scoped>
.header__nav-items{
  display: flex;
  justify-content: space-between;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  color: #FFA902;
}
</style>