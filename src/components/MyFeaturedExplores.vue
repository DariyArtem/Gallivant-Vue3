<template>
  <div class="featured">
    <div class="container">
      <h6 class="featured__title">
        Featured Explores
      </h6>
      <div class="row">
        <my-featured-post v-for="post in posts" :post="post">
        </my-featured-post>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center align-items-center">
          <li
              :class="{disabled: !pagination.prev_page_url}"
              class="page-item"
              @click.prevent="getPosts(pagination.prev_page_url)"
          >
            <span class="page-link" aria-hidden="true">
             <svg class="explores-pagination-prev" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
               <path d="M5.172 7.00001L0.222001 2.05001L1.636 0.636012L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z" fill="#141414"></path>
             </svg>
            </span>
          </li>
          <li class="page-item" v-for="page in pagination.last_page">
            <a @click.prevent="getPosts(apiUrl+page)" :class="{active: isActive}"  class="page-link" href="#">{{ page }}</a>
          </li>
          <li
              :class="{disabled: !pagination.next_page_url}"
              class="page-item"
              @click.prevent="getPosts(pagination.next_page_url)">
              <span class="page-link" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                      d="M5.172 7.00001L0.222001 2.05001L1.636 0.636012L8 7.00001L1.636 13.364L0.222 11.95L5.172 7.00001Z"
                      fill="#141414"/>
                </svg>
              </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MyFeaturedPost from "@/components/MyFeaturedPost";
import axios from "axios";

export default {
  name: "MyFeaturedExplores",
  data() {
    return {
      posts: [],
      pagination: {},
      error: false,
      apiUrl: 'https://gallivant/api/featured?page=',
      isActive: false
    }
  },
  components: {
    MyFeaturedPost,
  },
  methods: {
    getPosts(page_url) {
      page_url = page_url || 'https://gallivant/api/featured'

      axios
          .get(page_url)
          .then(response => {
            this.posts = response.data.data
            this.makePagination(response.data)
          })
          .catch(error => {
            console.log(error)
            this.error = true
          })
    },
    makePagination(response) {
      this.pagination = {
        current_page: response.current_page,
        last_page: response.last_page,
        prev_page_url: response.prev_page_url,
        next_page_url: response.next_page_url,
      }
    },
  },
  mounted() {
    this.getPosts();
  },
}
</script>

<style scoped>
.disabled{
  display: none;
}
.pagination{
  margin-top: 50px;
}
.page-link{
  border: none;
  color: #141414;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}
.page-link:hover{
  border: none;
  color: #FFA902;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}
.active{
  border: none;
  color: #FFA902;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}

.explores-pagination-prev{
  transform: scale(-1, 1);
}
.featured {
  margin-top: 100px;
}

.featured__title {
  margin: 0 auto 50px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 36px;
}
</style>