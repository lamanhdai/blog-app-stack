import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {auth} from '@/api'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  async function login(user) {
    const data = await auth().login(user)
    token.value = data.access_token
  }

  return {
    token,
    login
  }
})
