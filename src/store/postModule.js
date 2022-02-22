import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        limit: 6,
        page: 2,
        totalPages: 0,
    }),
    getters: {
        getPosts(state){
            return state.posts
        }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts
        },
        setPage(state, page){
            state.page = page;

        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages
        },
    },
    actions: {
        async fetchFeaturedPosts({state, commit}) {
            try {
                const response = await axios.get('https://gallivant/api/featured')
                commit('setPosts', response.data.data)
            } catch (e) {
                console.log(e)
            }
        },
    },
    namespaced: true
}