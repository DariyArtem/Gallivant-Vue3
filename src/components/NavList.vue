<template>
  <div class="header__nav-list">
    <div class="header__nav-items">
      <router-link to="#">
        <nav-item>Home</nav-item>
      </router-link>
      <router-link to="#">
        <nav-item>Account</nav-item>
      </router-link>
      <router-link to="#">
        <nav-item>About Me</nav-item>
      </router-link>
      <router-link to="#">
        <nav-item>Categories</nav-item>
      </router-link>
      <router-link to="#">
        <nav-item>Contact Me</nav-item>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem";
export default {
name: "NavList",
  components: {
    NavItem
  }

}
</script>

<style scoped>

</style>