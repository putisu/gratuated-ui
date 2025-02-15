<template>
  <label class="c-checkbox" :class="{'is-checked': isChecked}">
    <span class="c-checkbox-input">
      <span class="c-checkbox-inner"></span>
      <input type="checkbox" class="c-checkbox-original" :name="name" v-model="model" :value="label">
    </span>
    <span class="c-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'CheckboxComponent',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"  scoped>
.c-checkbox{
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .c-checkbox-input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .c-checkbox-inner{
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after{
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        top: 1px;
        position: absolute;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .c-checkbox-original{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      width: 0;
      height: 0;
      margin: 0;
    }
  }
  .c-checkbox-label{
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.c-checkbox.is-checked{
  .c-checkbox-input{
    .c-checkbox-inner{
      border-color: #409eff;
      background: #409eff;
      &:after{
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .c-checkbox-label{
    color: #409eff;
  }
}
</style>
