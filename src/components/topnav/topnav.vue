<template>
  <div class="h">
    <mu-appbar class="nav h">
      <mu-avatar slot="left" :src="face" class="nav-left" @click="open('left')"/>
      <div class="nav-txt" slot="default">
        <i>{{headerTitle}}</i>
      </div>
      <mu-flat-button icon="search" color="#2E2C6B" slot="right" class="nav-right"/>
    </mu-appbar>
    <mu-popup position="left" popupClass="pop-left" :open="leftPopup" @close="close('left')">
      <mu-list class="person">
        <mu-list-item title="麦芽糖">
          <mu-avatar slot="left" :src="face"/>
        </mu-list-item>
        <mu-list-item>
          <mu-text-field hintText="编辑个性签名" @input="handleInput" :dataSource="dataSource" @change="handlechange" />
        </mu-list-item>
      </mu-list>
      <mu-list class="list">
        <mu-list-item title="Inbox">
          <mu-icon slot="left" value="inbox" color="#2E2C6B"/>
        </mu-list-item>
        <mu-list-item title="Starred">
          <mu-icon slot="left" value="grade" color="#2E2C6B"/>
        </mu-list-item>
        <mu-list-item title="Sent mail">
          <mu-icon slot="left" value="send" color="#2E2C6B"/>
        </mu-list-item>
        <mu-list-item title="Drafts">
          <mu-icon slot="left" value="drafts" color="#2E2C6B"/>
        </mu-list-item>
        <mu-list-item title="close" @click="close('left')">
          <mu-icon slot="left" value="close" color="#2E2C6B"/>
        </mu-list-item>
      </mu-list>
    </mu-popup>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      leftPopup: false,
      dataSource: []
    }
  },
  computed: mapState(['headerTitle', 'face']),
  methods: {
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    },
    handlechange (val) {
      console.log(`you choose ${val}`)
    },
    handleInput (val) {
      this.dataSource = [
        val
      ]
    }
  }
}
</script>

<style lang="css">
</style>
