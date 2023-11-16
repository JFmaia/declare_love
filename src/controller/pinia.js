import { defineStore } from 'pinia'

export const controllerPinia = defineStore('controller', {
    state: () => {
        return { value: 0 };
    },
    actions: {
        toogleValue() {
          this.value = this.value + 1;
        },
    },
    getters: {
        getValue(state){
            return state.value
        }
    },
})
  