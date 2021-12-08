import { createStore } from 'vuex'
import task from './module/task.js'
import product from './module/product.js'
import cart from './module/cart.js'


export default createStore({

    modules: { task, product, cart }
})