<template>
  <div class="homework">
    <!-- 标题栏 -->
    <el-row>
      <el-col :span="24">
        <div class="label">
          <span class="title">作业管理系统[Admin管理页面]</span>
          <div class="extra-buttons">
            <el-button class="login-button">教师登录</el-button>
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
                <IconMenu />
              </el-icon>
              <span slot="title"> 首页 </span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <Location />
                </el-icon>
                <span>学生管理</span>
              </template>
              <el-menu-item index="2-1">学生</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">
              <el-icon>
                <Document />
              </el-icon>
              <span slot="title">班级信息管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <Setting />
              </el-icon>
              <span slot="title">作业提交管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon>
                <Setting />
              </el-icon>
              <span slot="title">作业点评管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <el-icon>
                <Setting />
              </el-icon>
              <span slot="title">作业信息</span>
            </el-menu-item>
            <el-menu-item index="7">
              <el-icon>
                <Setting />
              </el-icon>
              <span slot="title">个人信息</span>
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

<script setup lang="ts"></script>

<style scoped>
.homework {
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

.tools,
.wordList {
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
