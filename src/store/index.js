import { createStore } from 'vuex'
import {categoryModule} from "@/store/categoryModule"



export default createStore({
  modules: {
    category: categoryModule
  }
})
