<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active" to="/task">Task</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/product">Product</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            
            <router-link class="nav-link active" to="/cart">
            <span class="badge rounded-pill bg-primary me-1">{{count}}</span>
            <i class="bi bi-basket-fill"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
  setup(){
    let store=useStore();
    let count=computed(()=>store.getters['cart/count'])
    return{count}
  }
};
</script>

<style lang="scss">
$primary-color:blue;
  a {
        color: #fff;
        border-bottom: .15rem transparent solid;
        padding-bottom: .2rem;
        transition:border-color, .6s !important;
        &:hover {
            border-color: #fff;
        }
        &.router-link-active {
            border-color: $primary-color;
        }
    }
</style>
