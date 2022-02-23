<template>
  <h6 class="content__title">Choose Category</h6>
  <categories-list :categories="getCategories"/>
</template>

<script>
import CategoriesList from "@/components/CategoriesList";
import {mapActions, mapGetters} from "vuex";
export default {
name: "Categories",
  components: {
    CategoriesList,
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