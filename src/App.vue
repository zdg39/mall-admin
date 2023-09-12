<script setup></script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header> -->
  <router-view />
</template>

<!-- 全局通用样式-->
<style>
body {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}

.content-container {
  background-color: white;
  padding: 20px;
  margin-left: 20px;
  border-radius: 10px;
  min-width: 1200px;
  display: inline-block;
  width: 90%;
}

.input-tip {
  margin: 0 10px;
  line-height: 40px;
}

.input-field {
  margin-right: 40px;
}

.content-row {
  margin-bottom: 20px;
}
</style>
