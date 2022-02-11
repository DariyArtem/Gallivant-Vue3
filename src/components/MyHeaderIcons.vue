<template>
  <div class="header__icons">
    <my-header-icon>
      <font-awesome-icon :icon="['fab', 'facebook-f']"/>
    </my-header-icon>
    <my-header-icon>
      <font-awesome-icon :icon="['fab', 'twitter']"/>
    </my-header-icon>
    <my-header-icon>
      <font-awesome-icon :icon="['fab', 'instagram']"/>
    </my-header-icon>
    <my-header-icon>
      <font-awesome-icon :icon="['fab', 'youtube']"/>
    </my-header-icon>
  </div>
</template>

<script>
import MyHeaderIcon from "@/components/MyHeaderIcon";
export default {
name: "MyHeaderIcons",
  components: {
    MyHeaderIcon
  }
}
</script>

<style scoped>
.header__icons{
  flex: 0 0 189px;
  display: flex;
  justify-content: space-between;
}
svg{
   color: #696969;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-right: -50%;
   transform: translate(-50%, -50%);
 }


</style>