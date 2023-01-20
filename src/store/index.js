import {createStore} from 'vuex'
import getters from './getters'
import category from "./modules/category";


const store =createStore({
    state:{
        token:'',
    },
    mutations: {
        //存储token方法
        //设置token等于外部传递进来的值
        setToken(state, token) {
            state.token = token
            localStorage.token = token //同步存储token至localStorage
        },
    },
    getters,
    modules:{
        category
    },
    actions: {},

})
export default store

