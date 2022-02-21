<template>
  <div class="featured">
    <div class="container">
      <h6 class="featured__title">
        Featured Explores
      </h6>
      <div class="row">
        <my-featured-post v-for="post in getPosts" :post="post">
        </my-featured-post>
      </div>
    </div>
  </div>
</template>

<script>
import MyFeaturedPost from "@/components/MyFeaturedPost";
import {mapActions, mapGetters} from "vuex";
export default {
name: "MyFeaturedExplores",
components:{
  MyFeaturedPost,
},
  methods:{
    ...mapActions({
      fetchFeaturedPosts: 'post/fetchFeaturedPosts'
    })
  },
  computed:{
    ...mapGetters({
      getPosts: 'post/getPosts'
    })
  },
  mounted() {
    this.fetchFeaturedPosts();
  },
}
</script>

<style scoped>
.featured{
  margin-top: 100px;
}
.featured__title{
  margin: 0 auto 50px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 36px;
}
</style>