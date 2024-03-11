<script setup>
import {ref} from 'vue'
import {useAuthStore} from '@/stores/auth'
import { useRouter, useRoute } from 'vue-router'
import {auth} from '../api'
  
  const authStore = useAuthStore()
  const user = ref({
    username: '',
    password: ''
  })

  const userRegister = ref({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: ''
  })
  const router = useRouter()
  const route = useRoute()
  async function login() {
    await authStore.login(user.value)
    if(authStore.token) {
      if(route.query.redirectUrl)
          router.push(route.query.redirectUrl?.toString())
      else
          router.push('/posts');
    }
  }
  function registerUser() {
    const {registerUser: registerUserAPI} = auth();
    registerUserAPI(userRegister.value).then(() => {
      userRegister.value = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        role: ''
      }
    })
  }
</script>

<template>
  <div class="container">
    <form class="container-form" @submit.prevent="login">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Enter your username" v-model="user.username" autocomplete="username">
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock"
          placeholder="Enter your password" v-model="user.password" autocomplete="current-password">
      </div>
      <div>
        <button type="button" class="btn btn-forgot-password">Forgot Password</button>
        <button type="submit" class="btn btn-login">Login</button>
      </div>
    </form>

    <form class="container-form" @submit.prevent="registerUser">
      <h2 class="container-form__title">Sign up for a free account</h2>
      <div class="mb-3 row">
        <div class="col-lg-6">
          <input type="text" class="form-control" placeholder="First Name" v-model="userRegister.firstName">
        </div>
        <div class="col-lg-6">
          <input type="text" class="form-control" placeholder="Last Name" v-model="userRegister.lastName">
        </div>
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Username" v-model="userRegister.username">
      </div>
      <div class="mb-3">
        <input type="email" class="form-control" placeholder="Email" v-model="userRegister.email">
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Password" v-model="userRegister.password" autocomplete="current-password">
      </div>
      <div class="mb-3">
        <select class="form-select form-select-lg mb-3" aria-label="form-select-lg example" v-model="userRegister.role">
          <option selected>Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-register">Register</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container-form {
  max-width: 622px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 75px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 64px;
  background: #fff;
}

.form-label {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 4px;
}

.form-control {
  padding: 8px 12px;
  width: 100%;
  height: 40px;

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  color: rgba(0, 0, 0, 0.5);
}

.btn-forgot-password {
  padding: 10px 12px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;

  color: #000000;
}

.btn-login {
  padding: 10px 12px;
  background: #FFE600;
  border-radius: 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  margin-left: 8px;
  width: 176px;
}

.container-form {
  &__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.015em;
    color: #000000;
    margin-bottom: 43px;
  }
}

.form-select {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #666666;

  &:focus {
    box-shadow: none;
  }
}

.btn-register {
  border-radius: 8px;

  background: #FFE600;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: -0.015em;

  color: #000000;
  width: 184px;
}
</style>