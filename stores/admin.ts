import { defineStore, skipHydrate } from 'pinia'
import { ref } from "vue"

export const useAdminStore = defineStore('admin', () => {
    const dialogOpen = ref(false)
    const isLoggedIn = ref(false)
    return {
        dialogOpen: skipHydrate(dialogOpen),
        isLoggedIn: skipHydrate(isLoggedIn)
    }
})
