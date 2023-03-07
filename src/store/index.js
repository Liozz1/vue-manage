import vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user from "@/store/user";
vue.use(Vuex)

export default new Vuex.Store({
    modules:{
tab,
        user
    }
})