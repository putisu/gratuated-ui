<template>
  <div class="f-form-item">
    <label class="f-form-item-label"
           :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="f-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItemComponent',
  props: {
    label: String
  },
  inject: ['Form']
}
</script>

<style lang="scss"  scoped>
.f-form-item {
  margin-bottom: 25px;
  .f-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .f-form-item-content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
