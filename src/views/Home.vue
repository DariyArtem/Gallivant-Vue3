<template>
  <my-header></my-header>
  <my-categories/>
</template>

<script>
// @ is an alias to /src

import MyHeader from "@/components/MyHeader";
import MyCategories from "@/components/MyCategories";

export default {
  name: 'Home',
  components: {
    MyHeader,
    MyCategories,

  }
}
</script>
