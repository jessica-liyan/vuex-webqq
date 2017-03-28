<template>
  <div id="app" class="app">
    <div class="app-top">
    </div>
    <div class="app-section">
      <router-view></router-view>
    </div>
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
.app{height:100%;}
.app-top{height:10%;}
.app-section{height:80%;overflow:auto;}
.app-footer{height:10%;}
</style>
