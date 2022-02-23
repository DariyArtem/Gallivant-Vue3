<template>
  <div class="header__icons">
    <header-icon>
      <font-awesome-icon :icon="['fab', 'facebook-f']"/>
    </header-icon>
    <header-icon>
      <font-awesome-icon :icon="['fab', 'twitter']"/>
    </header-icon>
    <header-icon>
      <font-awesome-icon :icon="['fab', 'instagram']"/>
    </header-icon>
    <header-icon>
      <font-awesome-icon :icon="['fab', 'youtube']"/>
    </header-icon>
  </div>
</template>

<script>
import HeaderIcon from "@/components/UI/HeaderIcon";
export default {
name: "HeaderIcons",
  components: {
    HeaderIcon
  }
}
</script>

<style scoped>


</style>