<template>
  <my-background/>
  <header class="header">
    <div class="container">
        <my-header-row/>
        <my-header-hr/>
        <my-nav-list/>
    </div>
  </header>
  <div class="container">
    <my-header-content/>
  </div>
</template>

<script>
import MyBackground from "@/components/MyBackground";
import MyHeaderHr from "@/components/MyHeaderHr";
import MyHeaderRow from "@/components/MyHeaderRow";
import MyNavList from "@/components/MyNavList";
import MyHeaderContent from "@/components/MyHeaderContent";


export default {
name: "MyHeader",
  components: {
    MyBackground,
    MyHeaderRow,
    MyNavList,
    MyHeaderHr,
    MyHeaderContent,
  }
}
</script>

<style scoped>

</style>