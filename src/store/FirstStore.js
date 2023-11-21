import {defineStore} from 'pinia'

export const useFirstStore = defineStore('firstStore', {
    // state 
    state: () => {
        return {
            count: 10
        }
    },
    // getters
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    // actions
})