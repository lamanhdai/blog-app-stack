<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Vidle from 'v-idle'
import {useAuthStore} from '@/stores/auth'

const authStore = useAuthStore()
</script>

<template>
  <Vidle :duration="0" :wait="1200" @idle="authStore.logout()" style="display: none;"/>
    <Header/>
    <RouterView />
</template>

<style scoped>

</style>
