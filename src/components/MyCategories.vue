<template>
  <my-categories-title/>
  <my-categories-list :categories="getCategories"/>
</template>

<script>
import MyCategoriesList from "@/components/MyCategoriesList";
import MyCategoriesTitle from "@/components/MyCategoriesTitle";
import {mapActions, mapGetters} from "vuex";
export default {
name: "MyCategories",
  components: {
    MyCategoriesList,
    MyCategoriesTitle
  },
  methods:{
    ...mapActions({
      fetchCategories: 'category/fetchCategories'
    })
  },
  computed:{
   ...mapGetters({
     getCategories: 'category/getCategories'
   })
  },
  mounted() {
    this.fetchCategories();
  },
}
</script>

<style scoped>

</style>