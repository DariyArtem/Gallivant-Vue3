<template>
  <div class="featured">
    <div class="container">
      <h6 class="block__title">
        Featured Explores
      </h6>
      <div class="row">
        <featured-post v-for="post in posts" :post="post">
        </featured-post>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center align-items-center">
          <li
              :class="{disabled: !pagination.prev_page_url}"
              class="page-item"
              @click.prevent="getPosts(pagination.prev_page_url)"
          >
            <span class="page-link" aria-hidden="true">
             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
               <path d="M3.82507 6.364L8.77507 11.314L7.36107 12.728L0.99707 6.364L7.36107 0L8.77507 1.414L3.82507 6.364Z"
                     fill="#141414"/>
             </svg>
            </span>
          </li>
          <li class="page-item" v-for="page in pagination.last_page">
            <a @click.prevent="getPosts(apiUrl+page)" :class="{active: isActive}" class="page-link" href="#">
              {{ page }}
            </a>
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
import FeaturedPost from "@/components/FeaturedPost";
import axios from "axios";

export default {
  name: "FeaturedExplores",
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
    FeaturedPost,
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

</style>