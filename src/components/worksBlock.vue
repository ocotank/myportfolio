<template>
  <section id="worksBlock">
    <h2 class="my-portfolio__title">WORKS</h2>
    <div class="example-modal-window works-wrapper">
      <p>ボタンを押すとモーダルウィンドウが開きます</p>
      <div class="modal-block">
        <div @click="modal = 1">
          <div class="modal-block__button">
            <figure class="modal-block__button">
              <img src="../assets/img/img_comzodance.png" alt="">
            </figure>
          </div>
        </div>
        <div @click="modal = 2">
          <div class="modal-block__button">
            <figure>
              <img src="../assets/img/img_18newyear.png" alt="">
            </figure>
          </div>
        </div>
        <div @click="modal = 3">
          <div class="modal-block__button">
            <figure>
              <img src="../assets/img/img_18summer.png" alt="">
            </figure>
          </div>
        </div>
        <div @click="modal = 4">
          <div class="modal-block__button">
            <figure>
              <img src="../assets/img/kbc.png" alt="">
            </figure>
          </div>
        </div>
        <div @click="modal = 5">
          <div class="modal-block__button">
            <figure>
              <img src="../assets/img/img_19newyear.png" alt="">
            </figure>
          </div>
        </div>
        <div @click="modal = 6">
          <div class="modal-block__button">
            <figure>
              <img src="../assets/img/img_itscom_18baseball.jpg" alt="">
            </figure>
          </div>
        </div>
        <div @click="modal = 7">
          <div class="modal-block__button">
            <figure>
              <img src="../assets/img//img_futakorice.png" alt="">
            </figure>
            <p></p>
          </div>
        </div>
      </div>
      
      <!-- コンポーネント MyModal -->
      <MyModal @close="modal = false" v-if="modal == '1'" :key="1">
        <!-- default スロットコンテンツ -->
        <figure slot="figureimg" class="modal-img">
          <img src="../assets/img/img_comzodance.png" alt="">
        </figure>
        <div slot="textblock">
          <h3 slot="work-title">コムゾーダンス</h3>
          <p slot="ork-skil">css/html</p>
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
          <p slot="ork-skil">css/html/jquery</p>
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
  }
  &__button{
    overflow: hidden;
    max-height: 300px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(104, 104, 104, 0.5);
    }
  }
  @media(max-width: 414px){
    div{
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
  max-height: 400px;
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
