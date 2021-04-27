import Vuex from 'vuex'
import Products from './products/index'
const store = new Vuex.Store({
    modules: {
        product: Products
    }
})
export default store
