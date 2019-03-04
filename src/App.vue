<template>
  <div id="app" class="my-portfolio">
    <headerMenu></headerMenu>
    <div class="my-portfolio__inner">
      <transition name="view">
        <router-view/>
      </transition>
    </div>
    <Contact></Contact>
    <MyFooter></MyFooter>
  </div>
</template>

<style lang="scss" src="./assets/sass/global.scss"></style>
<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
}
a{
  text-decoration: none;
}
.view-enter-active,.view-leave-active{
  transition: opacity 1s;
}
.view-leave-active{
  // position: absolute;
  display: none;
}
.view-enter,.view-leave-to{
  opacity: 0;
}
</style>

<script>

import MyFooter from '@/components/MyFotter'
import headerMenu from '@/components/headerMenu'
import Contact from '@/components/ContactBlock'

export default {
  name: 'App',
  components: {
    MyFooter,
    headerMenu,
    Contact
  }
}
</script>
