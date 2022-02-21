<template>
  <my-header></my-header>
  <my-categories/>
  <my-featured-explores/>
</template>

<script>
// @ is an alias to /src

import MyHeader from "@/components/MyHeader";
import MyCategories from "@/components/MyCategories";
import MyFeaturedExplores from "@/components/MyFeaturedExplores"

export default {
  name: 'Home',
  components: {
    MyHeader,
    MyCategories,
    MyFeaturedExplores,

  }
}
</script>
