<template>
  <h6 class="content__title">Choose Category</h6>
  <my-categories-list :categories="getCategories"/>
</template>

<script>
import MyCategoriesList from "@/components/MyCategoriesList";
import {mapActions, mapGetters} from "vuex";
export default {
name: "MyCategories",
  components: {
    MyCategoriesList,
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
.content__title{
  margin: 100px auto 50px auto;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 36px;
}
</style>