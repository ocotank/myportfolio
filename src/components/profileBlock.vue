<template>
  <section id="profile_block" class="profile_block">
    <div>
      <h2 class="my-portfolio__title">PROFILE</h2>
      <div>
        <ul class="profile_block__list">
          <li v-for="(items, index) in mylist" :key="index">{{ items.title }}{{ items.block }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .profile_block{
    max-width: 960px;
    margin: auto;
    font-size: 12px;
    padding: 20px;
    &__list{
      text-align: left;
    }
  }
</style>

<script>
export default {
  el: '#profile_block',
  data () {
    return {
      mylist: [
        { title: '名前︰ ', block: '岡田 麻子' },
        { title: '出身︰ ', block: '神奈川県' },
        { block: '販売業を経てweb業界へ。販売業はメガネ屋だった為目の測定等の経験があるため目に詳しい。' }
      ]
    }
  }
}
</script>
