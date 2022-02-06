// import tasksList from "@/api/tasks"
import {
    // reactive,
    // computed,
    toRefs
} from "@vue/composition-api";
import store from "../store";
export default function useTasks() {
    // REACTIVE
    // Modelo
    // const tasksData = reactive({
    //     tasks: tasksList,
    //     search: "",
    //     filteredTasks: computed(() => {
    //         return tasksData.tasks.filter((task) =>
    //             task.title.includes(tasksData.search)
    //         );
    //     }),
    // });
    // -**********************************-
    // Métodos
    function addTask(newTask) {
        // tasksData.tasks.push({
        //     title: newTask,
        //     completed: false,
        // });
        store.dispatch("addTask", newTask)
    }
    // -**********************************-
    // Return
    return {
        ...toRefs(store.state),
        addTask,
    };
}