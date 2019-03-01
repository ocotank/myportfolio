<template>
  <section id="worksBlock">
    <h2>WORKS</h2>
    <div>
      <button @click="openItem">開く</button>
      <div class="p-model" :class="{'is-open': isModalActive}">
        <p>POPUP!</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'worksBlock',
  data () {
    return {
      isModalActive: false
    }
  },
  methods: {
    openItem () {
      this.toggleModal()
    },
    toggleModal () {
      this.isModalActive = !this.isModalActive
    }
  }
}
</script>

<style lang="scss" scoped>
  .p-model{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    &.is-open{
      visibility: visible;
      opacity: 1;
      z-index: 100;
    }
  }
</style>
