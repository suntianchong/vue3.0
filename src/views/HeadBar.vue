<template>
  <div class="headbar" style="background:#14889A" :class="'position-left'">
    <!--工具栏-->
    <span class="toolbar">
      <el-menu
        class="el-menu-demo"
        background-color="#14889A"
        text-color="#14889A"
        active-text-color="#14889A"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <!--用户信息-->
          <span class="user-info">
            <img :src="user.avatar" />{{ user.name }}</span
          >
        </el-menu-item>
      </el-menu>
    </span>
  </div>
</template>
