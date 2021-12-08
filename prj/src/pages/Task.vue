<template>
  <div v-if="loading" class="container mt-5">
    <div class="row justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div v-else class="container mt-4">
    <CreateTask />
    <hr />
    <FilterTask />

    <div class="row">
      <div v-for="task in tasks" :key="task.id" class="col-md-4 g-3">
        <div class="card" :class="{ 'bg-light': task.completed }">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <del v-if="task.completed">{{ task.title }}</del>
              <div v-else>{{ task.title }}</div>
            </div>
            <div>
            <UpdateTask :task="task"/>
            <DelTask :task="task"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import FilterTask from "../components/FilterTask.vue";
import CreateTask from "../components/CreateTask.vue";
import UpdateTask from "../components/updateTask.vue";
import DelTask from "../components/DelTask.vue";
export default {
  name: "Home",
  components: {
    FilterTask,
    CreateTask,
    UpdateTask,
    DelTask,
  },
  setup() {
    let loading = ref(false);
    let store = useStore();
    let tasks = computed(() => store.getters["task/alltask"]);

    async function getTask() {
      loading.value = true;
      await store.dispatch("task/gtodos");
      loading.value = false;
    }
    getTask();
    return { tasks, loading };
  },
};
</script>
