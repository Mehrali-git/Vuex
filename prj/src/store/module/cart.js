import Swal from 'sweetalert2'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
const cart = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters: {
        count(state) {
            return state.cart.length;

        },
        allProduct(state) {
            return state.cart;
        },
        totalAmount(state) {
            return state.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    mutations: {
        add(state, product) {
            let item = state.cart.find(p => p.id == product.id)
            if (!item) {
                state.cart.unshift({
                    ...product,
                    quantity: 1,
                })
            } else {
                item.quantity++;
            }
            updateLocalStorage(state.cart);
            console.log(state.cart)
        },
        increament(state, product) {
            let item = state.cart.find(p => p.id == product.id)
            if (item) {
                item.quantity++
            }
            updateLocalStorage(state.cart);
            console.log(state.cart)
        },
        decreament(state, product) {
            let item = state.cart.find(p => p.id == product.id)
            if (item.quantity > 1) {
                item.quantity--
            }
            updateLocalStorage(state.cart);
            console.log(state.cart)
        },
        removeProduct(state, product) {
            state.cart = state.cart.filter(p => p.id != product.id)
            updateLocalStorage(state.cart);
            console.log(state.cart)
        },
        clearCart(state) {
            state.cart = []
            updateLocalStorage(state.cart);
            console.log(state.cart)
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('add', product)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: product.name + ' added',
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 2000
            })
        },
        increament({ commit }, product) {
            commit('increament', product)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: product.name + ' increament',
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 2000
            })
        },
        decreament({ commit }, product) {
            commit('decreament', product)
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: product.name + ' decreament',
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 2000
            })
        },
        removeProduct({ commit }, product) {
            commit('removeProduct', product)
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: product.name + ' decreament',
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 2000
            })
        },
        clearCart({ commit }) {
            commit('clearCart')
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: product.name + ' decreament',
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 2000
            })
        },
    }
}
export default cart;