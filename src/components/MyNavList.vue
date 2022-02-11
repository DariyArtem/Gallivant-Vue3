<template>
  <div class="header__nav-list">
    <my-nav-items/>
  </div>
</template>

<script>
import MyNavItems from "@/components/MyNavItems";
export default {
name: "MyNavList",
  components: {
    MyNavItems
  }

}
</script>

<style scoped>
.header__nav-list{
  margin: 0 auto;
  max-width: 783px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #fff;
}

</style>