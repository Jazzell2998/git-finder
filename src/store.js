import {
    createStore
} from "vuex";
import axios from 'axios'
const store = createStore({
    state: {
        user: null,
        repositories: null,
        url: 'https://api.github.com/users/'
    },
    mutations: {
        userInfo(state, data){
            state.user = data
        }
    },
    actions: {
        async userInfo({commit, state}, search){
            try {
              const res = await axios.get(`${state.url}${search}`)  
              commit('userInfo', res.data)
            } catch (error) {
                console.log('Произошла ошибка');
            }
        }
    },
    getters: {}
})

export default store