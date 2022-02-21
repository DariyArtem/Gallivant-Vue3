import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
    }),
    getters: {
        getPosts(state){
            return state.posts
        }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts
        }
    },
    actions: {
        async fetchFeaturedPosts({state, commit}) {
            try {
                const response = await axios.get('https://gallivant/api/featured')
                console.log(response)
                commit('setPosts', response.data)
            } catch (e) {
                console.log(e)
            }
        },
    },
    namespaced: true
}