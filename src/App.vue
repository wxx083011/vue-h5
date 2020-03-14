<template>
  <div id="app">
    <keep-alive>
      <router-view class="Router" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="Router" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  watch: {

  },
  mounted () {
    // getJSSDK()
  }
}
</script>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  background: pink;
}
</style>
