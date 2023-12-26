<template>
  <div v-if="loginModel === '注册'" class="container a-container" id="a-container">
    <form class="form" id="a-form">
      <h2 class="form_title title">欢迎注册HomeWorks</h2>
      <input class="form__input" type="text" placeholder="用户名" aria-label="用户名"/>
      <input class="form__input" type="password" placeholder="密码" aria-label="密码"/>
      <input class="form__input" type="password" placeholder="重复密码" aria-label="重复密码"/>
      <div class="login-info">
        <a class="form__link" @click="switchModel('登陆')">使用账号登陆</a>
      </div>
      <button class="form__button button submit">注册</button>
    </form>
  </div>
  <div v-else-if="loginModel === '登陆'" class="container b-container" id="b-container">
    <form class="form" id="b-form">
      <h2 class="form_title title">欢迎登陆HomeWorks</h2>
      <input class="form__input" type="text" placeholder="用户名" aria-label="用户名"/>
      <input class="form__input" type="password" placeholder="密码" aria-label="密码"/>
      <div class="login-info">
        <a class="form__link" @click="forgetPassword">忘记密码了？</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a class="form__link" @click="switchModel('注册')">注册新账户</a>
      </div>
      <button class="form__button button submit">登陆</button>
    </form>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
import {ElMessage} from 'element-plus'

const loginModel = ref('登陆')

const forgetPassword = () => {
  ElMessage({
    message: '忘记密码请联系QQ:3357223099',
    grouping: true,
    type: 'success'
  })
}

const switchModel = (model: string) => {
  loginModel.value = model
}
</script>

<style scoped>
:root {
  --bg-color: #ecf0f3;
  --input-color: #000000;
  --box-shadow: #000000;
}

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  background-color: var(--bg-color);
  transition: 1.25s;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.form__input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 16px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  color: var(--input-color);
  font-family: "Montserrat", sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

.form__input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form__link {
  font-size: 15px;
  margin-top: 25px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
  cursor: pointer;
  text-decoration: none;
}

.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
}

.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4B70E2;
  color: #f9f9f9;
  box-shadow: var(--box-shadow);
  border: none;
  outline: none;
}

.a-container {
  z-index: 100;
}

.b-container {
  z-index: 0;
}

.login-info {
  margin-top: 10px;
}
</style>
