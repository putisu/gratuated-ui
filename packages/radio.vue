<template>
  <label class="r-radio" :class="{'is-checked': label === model }">
    <span class="r-radio-input">
      <span class="r-radio-inner"></span>
      <input type="radio" class="r-radio-original" :value="label" :name="name" v-model="model">
    </span>
    <span class="r-radio-label">
      <slot>
      </slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'RadioComponent',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"  scoped>
.r-radio{
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .r-radio-input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .r-radio-inner{
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .r-radio-original{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .r-radio-label{
    font-size: 14px;
    padding-left: 10px;
  }
}
.r-radio.is-checked{
  .r-radio-input{
    .r-radio-inner{
      border-color: #409eff;
      background: #409eff;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .r-radio-label{
    color: #409eff;
  }
}
</style>
