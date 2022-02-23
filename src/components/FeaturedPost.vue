<template>
  <div class="col-xl-4 col-md-6 ">
    <div class="featured__post">
      <div class="featured__card">
        <a href="#">
          <img class="featured__image" v-bind:src="'http://gallivant/storage/'+post.img_path" alt="">
        </a>
      </div>
      <div class="featured__info">
        <div class="featured__post-title">{{post.title}}</div>
        <div class="featured__post-description">{{ post.description }}</div>
        <div class="featured__info-footer">
          <div class="featured__post-category">
            <a class="featured__ref" href="#">Ocean Travel</a>
          </div>
          <div class="featured__by-word">By</div>
          <div class="featured__post-author">Dariy Artem</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedPost",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>