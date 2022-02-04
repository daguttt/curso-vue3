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
import { computed, ref, watch } from "@vue/composition-api";

export default {
  name: "app",
  setup() {
    // Modelo Local
    // TODO: Documentación: https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref
    const tasks = ref(tasksList);
    const search = ref("");
    // Propiedades computadas
    const filteredTasks = computed(() => {
      return tasks.value.filter((task) => task.title.includes(search.value));
    });
    // Watchers
    // TODO: Documentación: https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch
    // Getter function to watch
    watch(() => {
      console.log(tasks.value.length);
    });
    // Reactive reference and callback (newValue, oldValue)
    watch(search, (newValue, oldValue) => {
      console.log(`Old:${oldValue} | | New:${newValue}`);
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
