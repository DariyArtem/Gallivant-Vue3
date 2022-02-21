import { createStore } from 'vuex'
import {categoryModule} from "@/store/categoryModule"
import {postModule} from "@/store/postModule"



export default createStore({
  modules: {
    category: categoryModule,
    post: postModule
  }
})
