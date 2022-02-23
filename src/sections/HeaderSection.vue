<template>
  <header-background :background="background"/>
  <header class="header">
    <div class="container">
        <header-row/>
        <header-hr/>
        <nav-list/>
    </div>
  </header>
  <div class="container">
    <header-content/>
  </div>
</template>

<script>
import HeaderBackground from "@/components/UI/HeaderBackground";
import HeaderHr from "@/components/UI/HeaderHr";
import HeaderRow from "@/components/HeaderRow";
import NavList from "@/components/NavList";
import HeaderContent from "@/components/HeaderContent";


export default {
name: "Header",
  components: {
    HeaderBackground,
    HeaderRow,
    NavList,
    HeaderHr,
    HeaderContent,
  },
  data: function () {
    return {
      background: 'background.png'
    }
  },
}
</script>

<style scoped>

</style>