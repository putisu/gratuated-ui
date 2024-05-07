<template>
  <button class="e-button" :class="[`e-button--${type}`, {'is-plain':plain}, {'is-round':round}, {'is-circle':circle}]"
      @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    </button>
</template>

<script>
export default {
  name: 'EButton',
  props: {
    type: {
      // 对于传送过来的type进行类型校验
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}

</script>

<style lang='scss' scoped>
.e-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: white;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.e-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.e-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.e-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.e-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.e-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

.e-button.is-plain {
  &:hover,
  &:focus{
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.e-button--primary.is-plain {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.e-button--success.is-plain {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.e-button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.e-button--warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.e-button--danger.is-plain {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.e-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}

.e-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}

.e-button [class*=icon-]+span{
  margin-left: 5px;
}
</style>
