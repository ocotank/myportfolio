<template>
  <div id="app" class="my-portfolio">
    <headerMenu></headerMenu>
    <transition name="view">
      <router-view/>
    </transition>
    <MyFooter></MyFooter>
  </div>
</template>

<style lang="scss" src="./assets/sass/global.scss"></style>
<style>
#app {
  font-family: "Noto Sans JP",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
.view-enter-active,.view-leave-active{
  transition: opacity 0.5s;
}
.view-leave-active{
  /* position: absolute; */
  display: none;
}
.view-enter,.view-leave-to{
  opacity: 0;
}
</style>

<script>

import MyFooter from '@/components/MyFotter'
import headerMenu from '@/components/headerMenu'

export default {
  name: 'App',
  components: {
    MyFooter,
    headerMenu
  }
}
</script>
