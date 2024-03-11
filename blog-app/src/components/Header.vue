<script setup>
  import Logo from '../assets/logo.svg';
  import Home from '../assets/home.png';
  import newPost from '../assets/new-post.png';
  import {useAuthStore} from '@/stores/auth'
  import { useRouter, useRoute } from 'vue-router'

  const authStore = useAuthStore()
  const router = useRouter()
  const route = useRoute()
  function logout() {
    authStore.logout();
    router.push('/signin');
  }
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="authStore.token">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img :src="Logo" alt="logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <div class="navbar__user">
        <p class="navbar__user-name" v-html="`${authStore.fullName},`"></p>
        <p class="navbar__user-message"> Welcome to your Dashboard</p>
      </div>
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" :class="{active: true}" aria-current="page" href="#"><img :src="Home" alt="home"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><img :src="newPost" alt="new post"></a>
          </li>
        </ul>
          <button class="btn btn-outline-primary" type="button" @click="logout">Log out</button>
      </div>
    </div>
  </nav>
</template>
<style>
.navbar-brand {
  display: block;
  width: 100px;
}
.nav-item {
  width: 116px;
}
.navbar-nav {
  margin-left: 70px;
}
.navbar__user {
  display: flex;
  align-items: baseline;
}
.navbar__user-name {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  margin-left: 23px;
}
.navbar__user-message {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.5);
}
p {
  margin-bottom: 0;
}
.nav-link.active {
  border: 2px solid #FFE600;
  border-radius: 10px;
}
</style>