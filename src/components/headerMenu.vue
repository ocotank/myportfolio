<template>
  <header class="header-nav">
    <nav class="nav-block">
      <ul id="headerMenu" class="header-menu">
        <li v-for="(item, index) in list" :key="index">
          <router-link v-bind:to="item.path" >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerMenu',
  data () {
    return {
      list: [
        {title: 'TOP', path: '/'},
        {title: 'WORKS', path: '/works'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  font-weight: bold;
  position: relative;
  font-size: 20px;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: #77b699;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.5s ease-in-out;
  }
  &:hover{
    color: #77b699;
    transition: 0.5s ease-in-out;
    &::after{
      transform: scale(1, 1);
    }
  }
}
.header-nav{
  background: #fff;
  width: 100%;
  z-index: 20;
  margin-bottom: 20px;
}
.nav-block{
  max-width: 960px;
  width: 95%;
  margin: auto;
  padding-top: 20px;
}
.header-menu{
  max-width: 150px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-left: auto;
}
</style>
