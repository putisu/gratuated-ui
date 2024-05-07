<template>
<transition name="transition">
  <div class="m-dialog-wrapper" v-show="visible" @click.self="handleClose">
      <div class="m-dialog" :style="{width: width, top: top}">
        <div class="m-dialog-header">
          <slot name="title">
            <span class="m-dialog-title">{{title}}</span>
          </slot>

          <button class="m-dialog-headerbtn" @click="handleClose">
            <i class="icon-close-circle"></i>
          </button>
        </div>
        <div class="m-dialog-body">
          <slot>
          </slot>
        </div>
        <div class="m-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
  </div>
</transition>

</template>

<script>
export default {
  name: 'DialogComponent',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang='scss'>
.m-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  scale: 1.2;
  overflow: auto;
  margin: 0;
  z-index: 2000;
  background-color: rgba(0,0,0,.5);

  .m-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;
  }

  .m-dialog-header {
    padding: 20px 20px 10px;
    .m-dialog-title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .m-dialog-headerbtn{
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      .icon-close-circle{
        color: #909399;
      }
    }
  }
  .m-dialog-body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .m-dialog-footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    .e-button:first-child{
      margin-right: 20px;
    }
  }
}
.transition-enter-active{
    animation: trans .5s
  }
.transition-leave-active{
    animation: trans .5s reverse
  }
@keyframes trans {
  0%{
      opacity: 0;
      transform: translateY(-20px) ;
    }
    100%{
      opacity: 1;
      transform: translateY(0px) ;
    }
  }
</style>
