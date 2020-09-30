<template>
  <ul>
    <li>
      <router-link :to="{name:'index'}">主页</router-link>
    </li>
    <li>
      <router-link :to="{name:'about'}">关于</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>


  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
