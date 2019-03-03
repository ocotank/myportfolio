
<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
        <button @click="$emit('close')" class="close-button"></button>
      <div class="modal-window">
        <div class="modal-block">
          <div class="modal-block__item modal-content">
            <slot name="figureimg"></slot>
            <slot/>
          </div>
          <div class="modal-block__item">
            <slot name="textblock">
              <slot name="work-title">workタイトル</slot>
              <slot name="work-skil">スキル</slot>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(119, 182, 153);
    // background: rgba(0, 0, 0, 0.5);
  }
  &-window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    margin: auto;
    padding: 20px;
    width: 90%;
  }
  .modal-block{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    &__item{
      flex: 0 1 50%;
      max-width: 50%;
    }
  }
  .close-button{
    position: absolute;
    transition: 0.5s;
    top: 5%;
    &:hover{
      transform: rotate(90deg);
      transition: 0.5s;
    }
    &::before{
      content: '\f057';
      color: #fff;
      font-family: 'Font Awesome 5 Free';
      display: inline-block;
      font-weight: 400;
      font-size: 40px;
    }
  }
  @media(max-width: 414px){
    &-window{
      width: 80%;
    }
    .close-button{
      top: 15%;
    }
    .modal-block{
      display: block;
      &__item{
        max-width: 100%;
      }
    }
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
