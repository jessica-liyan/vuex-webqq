<template>
  <div id="app" class="app">
    <div class="app-top">
      <topNav></topNav>
    </div>
    <div class="app-section">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <bottomTab></bottomTab>
    </div>
    <dialogList></dialogList>
  </div>
</template>

<script>
import topNav from './components/topnav/topnav'
import bottomTab from './components/bottomtab/bottomtab'
import dialogList from './components/dialog/dialog'
export default {
  name: 'app',
  components: {
    bottomTab,
    topNav,
    dialogList
  }
}
</script>

<style>
</style>
