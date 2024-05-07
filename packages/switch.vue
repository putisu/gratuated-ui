<template>
  <div class="s-switch"
       :class="{'is-checked': value}"
       @click="handleClick">
    <span class="s-switch-core"
          ref="core">
      <span v-if="$slots.default">
        <slot></slot>
      </span>
      <span class="s-switch-button"></span>
    </span>
    <input type="checkbox"
           class="s-switch-input"
           :name="name"
           ref="input">

  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        // eslint-disable-next-line
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
        this.$refs.core.style.color = color
      }
    }
  },
  mounted () {
    // if (this.activeColor || this.inactiveColor) {
    //   // eslint-disable-next-line
    //   let color = this.activeColor
    //   this.$refs.core.style.borderColor = color
    //   this.$refs.core.style.backgroundColor = color
    // }
    this.setColor()
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
.s-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .s-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .s-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .s-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.s-switch.is-checked {
  .s-switch-core {
    border-color: #409eff;
    background-color: #409eff;
    color: #409eff;
    .s-switch-button {
      transform: translateX(20px);
    }
  }
}
</style>
