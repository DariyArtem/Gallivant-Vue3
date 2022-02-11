<template>
<my-categories-title/>
  <my-categories-list/>
</template>

<script>
import MyCategoriesList from "@/components/MyCategoriesList";
import MyCategoriesTitle from "@/components/MyCategoriesTitle";
export default {
name: "MyCategories",
  components: {
    MyCategoriesList,
    MyCategoriesTitle
  }
}
</script>

<style scoped>

</style>