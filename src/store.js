import { Vuex } from "./Vuex";
import tasksList from "./api/tasks";

const store = new Vuex.Store({
    state: {
        tasks: [],
        search: "",
    },
    mutations: {
        addTask(state, newTask) {
            state.tasks.push({
                title: newTask,
                completed: false,
            })
        },
        setTasks(state, tasks) {
            state.tasks = tasks
        }
    },
    actions: {
        addTask(context, newTask) {
            return new Promise((resolve,) => {
                resolve(context.commit("addTask", newTask))
            })

        }
    },
    getters: {
        filteredTasks(state) {
            return state.tasks.filter(task => task.title.includes(state.search))
        }
    }
})
store.commit("setTasks", tasksList)
export default store;