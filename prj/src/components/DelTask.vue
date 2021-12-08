<template>
    <span @click="DelTask(task)" class="bi bi-trash " style="font-size:15px"></span>
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
    async function DelTask(task) {
    //   console.log(task)
      loadding.value = true;
      await store.dispatch("task/DelTask", task);
      loadding.value = false;
    }
    return { DelTask, loadding };
  },
};
</script>

<style></style>
