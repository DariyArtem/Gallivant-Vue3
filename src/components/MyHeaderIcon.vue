<template>
<div class="icon"><slot></slot></div>
</template>

<script>
export default {
name: "MyHeaderIcon",

}
</script>

<style scoped>
.icon{
  box-shadow: 0 1px 10px rgba(0, 0, 0, .1);
  position: relative;
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 50px;
  justify-content: center;
  color: #696969;

}

</style>