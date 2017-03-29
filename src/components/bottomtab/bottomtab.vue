<template>
  <mu-paper style="height:100%;">
    <mu-bottom-nav :value="bottomNav" @change="handleChange" class="bottom">
      <mu-bottom-nav-item value="message" title="message" icon="chat_bubble_outline"/>
      <mu-bottom-nav-item value="friends" title="friends" icon="people"/>
      <mu-bottom-nav-item value="discover" title="discover" icon="explore"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'message'
    }
  },
  methods: {
    // 点击按钮
    handleChange (val) {
      console.log(val, this)
      this.bottomNav = val
      // 路由跳转至当前点击的页面
      this.$router.push(val)
      // 改变title
      this.$store.commit('changTitle', { title: val })
    }
  }
}
</script>

<style scoped>
.bottom{height:100%;}
</style>
