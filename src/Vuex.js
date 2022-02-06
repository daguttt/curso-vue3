import Vue from "vue";
import VueCompositionApi, { computed, reactive } from "@vue/composition-api";

/**
 * Antes de usar cualquier funcion de la composition API hay que
    decirle a Vue que use el plugin de Composition API
 */
Vue.use(VueCompositionApi)

class Store {
    constructor(objOptions) {
        // Estado reactivo con ayuda de 'reactive()'
        this.state = reactive(objOptions.state);
        this.mutations = objOptions.mutations;
        this.actions = objOptions.actions;
        if (objOptions.getters) {
            this.getters = {}
            const { getters } = objOptions
            // Cada getter como propiedad computada que a su vez es reactiva
            for (const [getterName, getterFunction] of Object.entries(getters)) {
                Object.defineProperty(this.getters, getterName, {
                    get: () => {
                        // ! Se usa el '.value' para acceder al valor reactivo
                        return computed(() => getterFunction(this.state)).value
                    }
                })
            }
        }
    }
    // Para Mutaciones
    commit(mutationName, payload) {
        const mutation = this.mutations[mutationName]
        if (!mutation) return new Error(`No se encuentra la mutación: '${mutationName}'`)
        mutation(this.state, payload)
    }
    // Para Acciones
    dispatch(actionName, payload) {
        const action = this.actions[actionName];
        if (!action || !action.then)
            return Promise.resolve(action(this, payload))
        return action(this, payload)
    }
}
export const Vuex = {
    Store,
}