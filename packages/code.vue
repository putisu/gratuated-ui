<template>
  <div class="c-code"
       :style="{width:width}"
       :innerText="formatCode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CodeComponent',
  props: {
    width: {
      Type: String,
      default: '500px'
    }
  },
  computed: {
    formatCode () {
      const codeContent = this.$slots.default[0].text.toString()
      return codeContent
    }
  }
}

</script>

<style  scoped>
.c-code {
  color: #5e6d82;
  font-size: 12px;
  line-height: 1.8;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}
</style>
