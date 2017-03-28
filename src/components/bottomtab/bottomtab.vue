<template>
  <mu-bottom-nav :value="bottomNav"
                 @change="handleChange"
                 class="bottom-tab">
  
    <mu-bottom-nav-item value="message"
                        title="Message"
                        icon="chat_bubble_outline" />
  
    <mu-bottom-nav-item value="friends"
                        title="Friends"
                        icon="people" />
  
    <mu-bottom-nav-item value="discover"
                        title="Discover"
                        icon="explore" />
  
  </mu-bottom-nav>
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
</style>
