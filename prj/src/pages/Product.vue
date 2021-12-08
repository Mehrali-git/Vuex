<template>
  <div class="container mt-4">
    <div class="row g-3">
      <div v-for="product in products" :key="product.id" class="col-md-3">
        <div class="card-group">
          <div class="card">
            <img
              class="card-img-top"
              :src="product.image"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">{{ product.name }}</h4>
              <p class="card-text">{{ product.description }}</p>
            </div>
            <div
              class="card-footer d-flex justify-content-lg-between align-items-center"
            >
              <button @click="addToCart(product)" class="btn btn-success btn-sm">Add To Card</button>
              <span>{{ product.price }}</span>
            </div>
          </div>
        </div>
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
    let products = computed(() => store.getters["product/allProducts"]);
    function addToCart(product){
      store.dispatch('cart/addToCart',product)
    }
    return {
      products,
      addToCart,
    };
  },
};
</script>

<style></style>
