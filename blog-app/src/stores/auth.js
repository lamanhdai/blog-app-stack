import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { jwtDecode } from "jwt-decode";
import {auth} from '@/api'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const fullName = computed(() => {
    if(!token.value)
    return null;
    const decoded = jwtDecode(token.value);
    return decoded.firstName + ' ' + decoded.lastName
  })
  async function login(user) {
    const data = await auth().login(user)
    token.value = data.access_token
  }
  function logout() {
    token.value = null
  }

  return {
    token,
    login,
    fullName,
    logout
  }
})
