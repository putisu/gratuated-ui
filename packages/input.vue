<template>
  <div class="i-input"
       :class="{'i-input-warpper':clearable || showPassword}"
       :style="{width:width}">
    <div v-if="$slots.default"
          class="i-input-slot">
      <slot></slot>
    </div>
    <input class="i-input-inner"
           :class="{'is-disabled': disabled}"
           :placeholder="placeholder"
           :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
           :name="name"
           :disabled="disabled"
           :value="value"
           @input="handleInput"
           :style="{width:width}">
    <span class="i-input-suffix"
          v-if="{'i-input-warpper':clearable || showPassword}">
      <i class="icon-close-circle"
         v-if="clearable && value"
         @click="clear"></i>
      <i class="icon-check-circle"
         v-if="showPassword"
         @click="handlePassword"
         :class="{'icon-check-circle-active':passwordVisible}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    width: {
      Type: String,
      default: '1000px'
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss"  scoped>
.i-input {
  // width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .i-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.i-input-slot {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 20px;
  line-height: 40px;
  text-align: center;
}
.i-input-warpper {
  .i-input-inner {
    padding-right: 30px;
  }
  .i-input-suffix {
    position: absolute;
    height: 100%;
    right: 0;
    margin-right: 15px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .icon-check-circle-active {
      color: rgb(149, 149, 246);
    }
  }
}
</style>
