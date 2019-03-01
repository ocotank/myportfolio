<template>
  <header class="header-nav">
    <nav>
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
.header-nav{
    opacity: 0.7;
    background: #fff;
    position: fixed;
    width: 100%;
    z-index: 20;
    padding: 20px 0;
}
  .header-menu{
    max-width: 960px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
  }
</style>

