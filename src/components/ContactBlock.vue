<template>
  <div>
    <h2 class="my-portfolio__title">CONTACT</h2>
    <p>制作依頼・ご相談その他何かございましたらこちらからご連絡ください。</p>
    <ul class="link-block">
      <li class="link-block__item"><a href="mailto:jobjobevery@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li>
      <li class="link-block__item"><a href="//github.com/ocotank" target="_blank"><i class="fab fa-github"></i></a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .link-block{
    max-width: 200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    &__item{
      background: #649d82;
      padding: 20px;
      border-radius: 45px;
      box-sizing: border-box;
      margin-right: 20px;
      transition: 0.5s ease-in-out;
      &:last-of-type{
        margin-right: 0;
      }
      i{
        color: #fff;
        font-size: 50px;
      }
      &:hover{
        background: #2e4d3e;
      }
    }
  }
</style>
