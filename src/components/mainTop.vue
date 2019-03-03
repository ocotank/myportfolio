<template>
  <section>
    <div id="mainTop">
      <div class="title-block">
        <div class="title-block__item">
          <p v-for="(t, index) in text" :key="index" v-text="t" id="mainTitle" class="item delay-anime"></p>
        </div>
        <div class="title-block__item">
          <img src="../assets/img/img_mytop .png" alt="">
        </div>
      </div>
    </div>
  <profileBlock></profileBlock>
  </section>
</template>

<style lang="scss" scoped>
  #mainTop{
    background: rgb(119, 182, 153);
    animation: gradationTest 10s ease-in-out infinite alternate;
    max-width: 90%;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
  }
  @keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.title-block{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  border: 2px solid rgba(255,255,255,0.7);
  &__item{
    flex: 0 1 50%;
    max-width: 50%;
  }
  .item {
    display: inline-block;
    min-width: 0.3em;
    font-size: 60px;
    animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
    white-space: pre-wrap;
  }
  @media(max-width: 424px){
    display: block;
    &__item{
      max-width: 100%;
    }
  }
}

@for $value from 1 to 9 {
  .delay-anime:nth-child(#{$value + 1}) {
    animation-delay: $value * 100ms + 200ms;
  }
}
</style>

<script>
import profileBlock from '@/components/profileBlock'

export default {
  name: 'mainTop',
  components: {
    profileBlock
  },
  data () {
    return {
      text: `Portfolio`
    }
  }
}
</script>
