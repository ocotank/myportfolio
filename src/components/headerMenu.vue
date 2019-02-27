<template>
  <header>
    <nav class="">
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
  data(){
    return {
      list: [
        { title: 'TOP', path: '/'},
        { title: 'PROFILE', path: '/profile'},
        { title: 'WORKS', path: '/works'}
      ]
    }
  }
}
</script>
