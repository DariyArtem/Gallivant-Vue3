import axios from "axios";

export const categoryModule = {
    state: () => ({
        categories: [],
    }),
    getters: {
        getCategories(state){
            return state.categories
        }
    },
    mutations:{
        setCategories(state, categories){
            state.categories = categories
        }
    },
    actions: {
        async fetchCategories({state, commit}) {
            try {
                const response = await axios.get('https://gallivant/api/categories')
                commit('setCategories', response.data)
            } catch (e) {
                console.log(e)
            }
        },
    },
    namespaced: true
}