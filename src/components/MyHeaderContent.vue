<template>
<div class="header__content">
  <my-header-text/>
</div>
</template>

<script>
import MyHeaderText from "@/components/MyHeaderText";
export default {
name: "MyHeaderContent",
  components: {
    MyHeaderText,
  }
}
</script>

<style scoped>
.header__content{
  height: 950px;
  display: flex;
  align-items: center;
}
</style>