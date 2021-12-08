<template>
  <div class="container">
    <div class="row">
      <div class="mt-5">
        <div v-if="products.length<1" class="row">
          <div class="col-12 text-center">
            <i class="bi bi-basket-fill" style="font-size:6rem"></i>
            <div>
            <strong>Cart is empty</strong>
            </div>
            <div class="mt-3">
              <router-link class="btn btn-dark btn-sm" to="/product">To Product</router-link>
            </div>
          </div>
        </div>
        <table v-else class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td class="align-middle">
                <div class="row">
                  <div class="col-lg-2">
                    <img class="img-fluid" :src="product.image" alt="" />
                  </div>
                  <div class="col-lg-10">
                    <h5>{{ product.name }}</h5>
                    <p>{{ product.description }}</p>
                  </div>
                </div>
              </td>
              <td class="align-middle">{{ product.price }}</td>
              <td class="align-middle">
                <div class="d-flex">
                  <button @click="increament(product)" class="btn btn-dark btn-sm me-2">+</button>
                  <span class="m-2">{{ product.quantity }}</span>
                  <button @click="decreament(product)"
                    class="btn btn-dark btn-sm ms-2 "
                    style="padding: .6rem;"
                  >
                    -
                  </button>
                </div>
              </td>
              <td class="align-middle">
                {{ product.quantity * product.price }}
              </td>
              <td class="align-middle" style="width:15%">
                <button @click="removeProduct(product)" class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <a @click="clearCart" class="btn btn-dark btn-sm">Clear Cart</a>
              </td>
              <td colspan="2" class=""></td>
              <td class="hidden-xs text-center" style="width:15%">
                <strong >Total:{{cartTotalAmount}}</strong>
              </td>
              <td><a href="#" class="btn btn-success btn-sm">Checkout</a></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    // let products = computed(() => store.state.cart.cart);
    let products = computed(() => store.getters["cart/allProduct"]);
    let cartTotalAmount = computed(() => store.getters["cart/totalAmount"]);
    function increament(product){
      store.dispatch("cart/increament",product);
    }
    function decreament(product){
      store.dispatch("cart/decreament",product);
    }
    function removeProduct(product){
      store.dispatch("cart/removeProduct",product);
    }
    
    function clearCart(product){
      store.dispatch("cart/clearCart");
    }
    return { products ,cartTotalAmount,increament,decreament,removeProduct,clearCart};
  },
};
</script>

<style></style>
