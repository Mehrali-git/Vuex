<template>
  <div class="row">
    <div class="col-md-7">
      <div class="form-group d-flex justify-content-center align-items-center">
        <label class="me-2" for="NewTask">NewTask:</label>
        <input
          v-model="title"
          type="text"
          name="NewTask"
          id="NewTask"
          class="form-control"
          placeholder="NewTask"
          aria-describedby="helpId"
        />
        <button
          @click.prevent="createTask"
          class="btn btn-dark btn-sm ms-2 d-flex align-items-center"
        >
          Create
          <span v-if="loadding" class="spinner-border spinner-border-sm"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    let title = ref("");
    let loadding = ref(false);
    async function createTask() {
      loadding.value = true;
      await store.dispatch("task/createTask", title.value);
      loadding.value = false;
    }
    return { createTask, title, loadding };
  },
};
</script>

<style></style>
