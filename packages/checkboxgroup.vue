<template>
  <div class="c-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroupComponent',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
