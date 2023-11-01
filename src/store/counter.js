import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () => ({count: Number(sessionStorage.getItem('counter') || 0)}),
    actions: {
        increment() {
            this.count++
            sessionStorage.setItem('counter', String(this.count))
        }
    }
})