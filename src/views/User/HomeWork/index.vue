<template>
  <div class="homeWord">
    <!-- 标题栏 -->
    <el-row>
      <el-col :span="24">
        <div class="label">
          <span class="title">作业管理系统</span>
          <div class="extra-buttons">
            <el-button class="login-button">学生登录</el-button>
            <el-button type="primary" class="logout-button">退出登录</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 工具栏和作业列表 -->
    <el-row class="ToolsBox">
      <el-col :span="3">
        <div class="tools">
          <!-- 工具栏内容 -->
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @select="handleSelect"
              @open="handleOpen"
              @close="handleClose"
              background-color="#f2f2f2"
              text-color="#333"
              active-text-color="#409EFF"
          >
            <el-menu-item index="1">
              <el-icon>
                <IconMenu/>
              </el-icon>
              <span slot="title">
                首页
              </span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <Location/>
                </el-icon>
                <span>个人中心</span>
              </template>
              <el-menu-item index="2-1">修改密码</el-menu-item>
              <el-menu-item index="2-2">个人信息</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">
              <el-icon>
                <Document/>
              </el-icon>
              <span slot="title">作业信息管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Setting/>
              </el-icon>
              <span slot="title">作业提交管理</span>
            </el-menu-item>
            <!-- 其他菜单项 -->
          </el-menu>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="wordList">
          <component :is="currentComponent"></component>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import EditPassword from "../Router/EditPassword.vue";
import Home from "../Router/Home.vue";
import UserAbout from "../Router/UserAbout.vue";
import WordsAbout from "../Router/WordsAbout.vue";
import WordsSubmit from "../Router/WordsSubmit.vue";

// currentComponent 应该直接引用组件对象
const currentComponent = ref(Home);

// 使用导入的组件对象来更新 currentComponent 的值
const handleSelect = (index: string) => {
  switch (index) {
    case '1':
      currentComponent.value = Home;
      break;
    case '2-1':
      currentComponent.value = EditPassword;
      break;
    case '2-2':
      currentComponent.value = UserAbout;
      break;
    case '3':
      currentComponent.value = WordsAbout;
      break;
    case '4':
      currentComponent.value = WordsSubmit;
      break;
  }
}


// 方法定义
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.homeWord {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f2f2f2;
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f6f7fb;
  font-size: 20px;
  line-height: 50px; /* 调整行高以垂直居中文本 */
}

.title {
  font-weight: 600;
  color: #333;
}

.extra-buttons {
  display: flex;
}

.login-button {
  margin-right: 10px;
}

.tools, .wordList {
  height: calc(100vh - 50px);
  overflow-y: auto;
}

.tools {
  background-color: #f2f2f2;
  color: #333;
  border-right: 1px solid #ebebeb;
}

.wordList {
  background-color: white;
  color: black;
}
</style>
