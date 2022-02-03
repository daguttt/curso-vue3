<template>
  <div>
    <h2>Add tasks</h2>
    <hr />
    <form @submit.prevent="addTask">
      <input type="text" v-model="task" placeholder="Insert task" />
      <input type="submit" value="Add task" />
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "AppTaskAdd",
  // Vue 3 Composition API
  setup(props, { emit }) {
    const task = ref("");
    function addTask() {
      emit("addTask", task.value);
      task.value = "";
    }
    return {
      addTask,
      task,
    };
  },

  // -**********************************-

  // Vue 2
  // data() {
  //   return {
  //     task: ""
  //   };
  // },
  // methods: {
  //   addTask() {
  //     this.$emit("addTask", this.task);
  //     this.task = "";
  //   }
  // }
};
</script>
