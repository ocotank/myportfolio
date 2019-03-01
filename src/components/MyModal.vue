
<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
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
        <!-- <footer class="modal-footer">
          <slot name="footer">
          </slot>
        </footer> -->
      <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: cdenter;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
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
    &__item{
      flex: 0 1 50%;
      max-width: 50%;
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
