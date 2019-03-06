<template>
  <section id="worksBlock">
    <h2 class="my-portfolio__title">WORKS</h2>
    <div class="example-modal-window works-wrapper">
      <transition name="modalList" appear>
        <div class="modal-block">
          <div @click="modal = 1">
            <div class="modal-block__button">
              <figure class="modal-block__button">
                <img src="../assets/img/img_comzodance.png" alt="">
                <figcaption class="button-cap">コムゾーダンス</figcaption>
              </figure>
            </div>
          </div>
          <div @click="modal = 2">
            <div class="modal-block__button">
              <figure>
                <img src="../assets/img/img_18newyear.png" alt="">
                <figcaption class="button-cap">あけましておめでとうLP</figcaption>
              </figure>
            </div>
          </div>
          <div @click="modal = 3">
            <div class="modal-block__button">
              <figure>
                <img src="../assets/img/img_18summer.png" alt="">
                <figcaption class="button-cap">暑中見舞いLP</figcaption>
              </figure>
            </div>
          </div>
          <div @click="modal = 4">
            <div class="modal-block__button">
              <figure>
                <img src="../assets/img/kbc.png" alt="">
                <figcaption class="button-cap">KBC 学童保育 ものがたり</figcaption>
              </figure>
            </div>
          </div>
          <div @click="modal = 5">
            <div class="modal-block__button">
              <figure>
                <img src="../assets/img/img_19newyear.png" alt="">
                <figcaption class="button-cap">あけましておめでとう2019 LP</figcaption>
              </figure>
            </div>
          </div>
          <div @click="modal = 6">
            <div class="modal-block__button">
              <figure>
                <img src="../assets/img/img_itscom_18baseball.jpg" alt="">
                <figcaption class="button-cap">夏の高校野球 2019 LP</figcaption>
              </figure>
            </div>
          </div>
          <div @click="modal = 7">
            <div class="modal-block__button">
              <figure>
                <img src="../assets/img/img_futakorice.png" alt="">
                <figcaption class="button-cap">二子玉川らいす 2019 LP</figcaption>
              </figure>
              <p></p>
            </div>
          </div>
        </div>
      </transition>
      <!-- コンポーネント MyModal -->
      <MyModal @close="modal = false" v-if="modal == '1'" :key="1">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <a href="//www.itscom.net/comzodance/" target="_blank"><img src="../assets/img/img_comzodance.png" alt=""><figcaption class="modal-img__caption"><p class="caption-text">GO TO PAGE...</p></figcaption></a>
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">コムゾーダンス</h3>
          <p slot="work-skil" class="work-skil">使用言語：css/html</p>
        </div>
        <!-- /default -->
      </MyModal>
      <MyModal @close="modal = false" v-else-if="modal == '2'" :key="2">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <img src="../assets/img/img_18newyear.png" alt="">
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">あけましておめでとうLP</h3>
          <p slot="work-skil" class="work-skil">使用言語：css/html/jquery</p>
        </div>
        <!-- /default -->
      </MyModal>
      <MyModal @close="modal = false" v-else-if="modal == '3'" :key="3">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <a href="//www.cts.ne.jp/special/18summer/" target="_blank">
            <img src="../assets/img/img_18summer.png" alt="">
            <figcaption class="modal-img__caption">
              <p class="caption-text">GO TO PAGE...</p>
            </figcaption>
          </a>
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">暑中見舞いLP</h3>
          <p slot="work-skil" class="work-skil">使用言語：sass/html/jquery/gulp</p>
        </div>
        <!-- /default -->
      </MyModal>
      <MyModal @close="modal = false" v-else-if="modal == '4'" :key="4">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <a href="//www.itscom.net/contents/maegumi/contents/kbc/" target="_blank">
            <img src="../assets/img/kbc.png" alt="">
            <figcaption class="modal-img__caption">
              <p class="caption-text">GO TO PAGE...</p>
            </figcaption>
          </a>
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">KBC 学童保育 ものがたり</h3>
          <p slot="work-skil" class="work-skil">使用言語：css/html/jquery</p>
        </div>
        <!-- /default -->
      </MyModal>
      <MyModal @close="modal = false" v-else-if="modal == '5'" :key="5">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <a href="//www.itscom.net/special/19newyear/" target="_blank">
            <img src="../assets/img/img_19newyear.png" alt="">
            <figcaption class="modal-img__caption">
              <p class="caption-text">GO TO PAGE...</p>
            </figcaption>
          </a>
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">あけましておめでとう2019 LP</h3>
          <p slot="work-skil" class="work-skil">使用言語：sass/html/jquery/gulp</p>
        </div>
        <!-- /default -->
      </MyModal>
      <MyModal @close="modal = false" v-else-if="modal == '6'" :key="6">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <a href="//www.itscom.net/special/18baseball/" target="_blank">
            <img src="../assets/img/img_itscom_18baseball.jpg" alt="">
            <figcaption class="modal-img__caption">
              <p class="caption-text">GO TO PAGE...</p>
            </figcaption>
          </a>
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">夏の高校野球 2019 LP</h3>
          <p slot="work-skil" class="work-skil">使用言語：sass/html/jquery/gulp</p>
        </div>
        <!-- /default -->
      </MyModal>
      <MyModal @close="modal = false" v-else-if="modal == '7'" :key="7">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <a href="//www.itscom.net/special/futakorice/" target="_blank">
            <img src="../assets/img/img_futakorice.png" alt="">
            <figcaption class="modal-img__caption">
              <p class="caption-text">GO TO PAGE...</p>
            </figcaption>
          </a>
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">二子玉川らいす 2019 LP</h3>
          <p slot="work-skil" class="work-skil">使用言語：sass/html/jquery/gulp</p>
        </div>
        <!-- /default -->
      </MyModal>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works-wrapper{
  max-width: 960px;
  margin: auto;
}
.modal-block{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div{
    flex: 0 1 33.3%;
    max-width: 33.3%;
    padding: 10px;
    box-sizing: border-box;
    transition: 0.5s ease-in-out;
    &:hover{
      transform: scale(0.9);
    }
  }
  &__button{
    overflow: hidden;
    max-height: 300px;
    position: relative;
    border-radius: 25px;
    &::before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .button-cap{
      opacity: 0;
      background: rgba(119,182,153,0.5);
      transition: 0.5s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      font-weight: bold;
      padding: 20px;
      box-sizing: border-box;
      &:hover{
        opacity: 1;
      }
    }
  }
  .work-skil{
    font-size: 14px;
  }
  @media(max-width: 414px){
    > div{
      flex: 0 1 50%;
      max-width: 50%;
    }
    &__button{
      max-height: 200px;
    }
  }
}
.modal-img{
  overflow: hidden;
  max-height: 500px;
  position: relative;
  &__caption{
    opacity: 0;
    transition: 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    .caption-text{
      color: #fff;
      font-weight: bold;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 90%;
      height: 6%;
      margin: auto;
    }
    &:hover{
      opacity: 1;
    }
  }
  @media(max-width: 414px){
    max-height: 300px;
    margin-bottom: 20px;
  }
}
/* transition */
.modalList-enter-active, .modalList-leave-active {
  transition: opacity 4s, transform 1s;
}
.modalList-enter, .modalList-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>

<script>
import MyModal from './MyModal'

export default {
  components: { MyModal },
  data () {
    return {
      modal: false
    }
  }
}
</script>
