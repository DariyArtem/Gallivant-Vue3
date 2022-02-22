<template>
  <div class="col-xl-4 col-md-6 ">
    <div class="featured__post">
      <div class="featured__card">
        <a href="#">
          <img v-bind:src="'http://gallivant/storage/'+post.img_path" alt="">
        </a>
      </div>
      <div class="featured__info">
        <div class="featured__post-title">{{post.title}}</div>
        <div class="featured__post-description">{{ post.description }}</div>
        <div class="featured__info-footer">
          <div class="featured__post-category">
            <a href="#">Ocean Travel</a>
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
  name: "MyFeaturedPost",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.featured__card{
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
}
.featured__info{
  margin: 26px 25px;
  max-width: 320px;
}
.featured__post-title{
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: black;
}
.featured__post-description{
  line-height: 183.3%;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #868383;
}
.featured__info-footer{
  display: flex;
  align-items: baseline;
}
.featured__post-author{
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #141414
}
.featured__by-word{
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #696969;
  margin: 0 5px 0 5px;
}
a{
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #FFA902;
}
a:hover{
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #131313;
}
img{
  position: relative;
  width: 100%;
  height: 288px;
  border-radius: 10px;
}

</style>