<template>

    <span
      v-if="task.completed" @click="updateTask(task)"
      class="bi bi-check-all"
      style="font-size:22px"
    ></span>
    <span v-else @click="updateTask(task)" class="bi bi-check" style="font-size:22px"></span>
    <span v-if="loadding" class="spinner-border spinner-border-sm"></span>

</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: ["task"],
  setup() {
    let store = useStore();
    let loadding = ref(false);
    async function updateTask(task) {
      loadding.value = true;
      await store.dispatch("task/updateTask", task);
      loadding.value = false;
    }
    return { updateTask, loadding };
  },
};
</script>

<style></style>
