<template>
  <div class="r-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RadioGroupComponent',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>

</style>
