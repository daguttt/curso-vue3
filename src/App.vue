<template>
  <div id="app">
    <AppTaskSearch v-model="search" />
    <AppTaskList :tasks="filteredTasks" />
    <AppTaskAdd @addTask="addTask" />
  </div>
</template>

<script>
import tasksList from "./api/tasks.js";
import AppTaskList from "./components/AppTaskList.vue";
import AppTaskSearch from "./components/AppTaskSearch.vue";
import AppTaskAdd from "./components/AppTaskAdd.vue";
import { computed, ref } from "@vue/composition-api";

export default {
  name: "app",
  setup() {
    // Modelo Local
    const tasks = ref(tasksList);
    const search = ref("");
    // Propiedades computadas
    const filteredTasks = computed(() => {
      return tasks.value.filter((task) => task.title.includes(search.value));
    });
    // Metodos locales
    function addTask(newTask) {
      tasks.value.push({
        title: newTask,
        completed: false,
      });
    }
    return {
      tasks,
      search,
      addTask,
      filteredTasks,
    };
  },
  components: {
    AppTaskList,
    AppTaskSearch,
    AppTaskAdd,
  },
  // created() {
  //   this.tasks = tasks;
  // },
  // data() {
  //   return {
  //     tasks: [],
  //     search: "",
  //   };
  // },
  // methods: {
  //   addTask(task) {
  //     this.tasks.push({
  //       title: task,
  //       completed: false,
  //     });
  //   },
  // },
  // computed: {
  //   filteredTasks() {
  //     return this.tasks.filter((task) => task.title.includes(this.search));
  //   },
  // },
  // components: {
  //   AppTaskList,
  //   AppTaskSearch,
  //   AppTaskAdd,
  // },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  text-align: left;
}
</style>
