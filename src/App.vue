<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div class="app-footer">
      <bottomTab></bottomTab>
    </div>
  </div>
</template>

<script>
import bottomTab from './components/bottomtab/bottomtab'
export default {
  name: 'app',
  components: {
    bottomTab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
