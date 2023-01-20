import {number} from '@/constants'
import {getCategory} from '@/api/category'

/**
 * 处理navigationBar中的数据categorys
 */
export default {
    //独立作用域
    namespaced:true,
    state:() => {
        return {
            //相当于数据,唯一的公共数据源，共享的数据存放在这
            categorys:[number]
        }
    },
    mutations:{
        /**
         * 为数据categorys赋值，参数state是必须的
         */
        setCategorys(state) {
            state.categorys=[9,8,7,6]
        }
    },
    // actions:{
    //     /**
    //      * 获取category数据，并自动保存在vuex中
    //      */
    //     async useCategoryData( context ){
    //         const { categorys }= await getCategory()
    //         context.commit('setCategorys',categorys)
    //
    //     }
    // }
}