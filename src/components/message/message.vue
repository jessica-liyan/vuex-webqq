<template>
  <mu-list class="message">
    <mu-list-item v-for="(item, index) in data" :title="item.name" @click="showDialog({item, index})">
      <mu-avatar :src="item.head" slot="left"></mu-avatar>
      <div slot="describe">
        {{item.lastMessage}}
      </div>
      <div slot="right" class="t-c">
        <i>{{item.time}}</i>
        <mu-badge :content="`${item.count}`"/>
      </div>
    </mu-list-item>
  </mu-list>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      data: 'data'
    })
  },
  methods: {
    ...mapMutations({
      showDialog: 'showDialog'
    })
  }
}
</script>

<style scoped>
</style>
