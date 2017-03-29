<template>
  <div class="dialog h app has-input" v-if="dialog">
    <mu-appbar class="app-top">
      <mu-icon-button icon="arrow_back" slot="left" iconClass="c-purple" @click="closeDialog"/>
      <div slot="default" class="c-purple">
        {{activeItem.name}}
      </div>
      <div slot="right" class="c-purple">
        <mu-icon-button icon="videocam"/>
        <mu-icon-button icon="call"/>
        <mu-icon-button icon="person"/>
      </div>
    </mu-appbar>
    <div class="app-section">
      <mu-list>
        <mu-list-item class="t-l">
          <mu-avatar :src="activeItem.head" slot="left"></mu-avatar>
          <span class="content">如何判断是自己还是ai，自己在右边，ai在左边</span>
        </mu-list-item>
        <mu-list-item class="t-r" v-for="item in messageList">
          <mu-avatar :src="face" slot="right"></mu-avatar>
          <span class="content">{{item}}</span>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="app-footer c-gray">
      <div class="send-box">
        <mu-text-field hintText="输入文字" v-model="value" class="v-m"/>
        <mu-icon-button icon="send" @click="sendValue({value})" class="v-m"/>
      </div>
      <div class="send-utils">
        <mu-icon-button icon="mic_none"/>
        <mu-icon-button icon="photo_size_select_actual"/>
        <mu-icon-button icon="tag_faces" />
        <mu-icon-button icon="switch_video" />
        <mu-icon-button icon="cloud_queue" />
        <mu-icon-button icon="photo_camera" />
        <mu-icon-button icon="folder_open" />
      </div>
    </div>
  </div>
</template>

<script>
// 如何判断是自己还是ai，自己在右边，ai在左边
// 点击发送后sendValue，数据添加到面板中，同时添加在messagelist中
// 返回closeDialog的时候获取最后一条回话记录
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState(['dialog', 'activeItem', 'face', 'messageList'])
  },
  methods: {
    ...mapMutations(['closeDialog']),
    sendValue () {
      if (this.value.length) {
        this.$store.dispatch('sendValue', {
          message: this.value,
          that: this
        })
      } else {
        console.log('不能为空')
      }
      this.value = ''
    }
  }
}
</script>

<style scoped>
</style>
