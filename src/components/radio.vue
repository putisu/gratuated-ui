<template>
  <div>
    <!-- 顶部文字 -->
    <div class="radio-topword">
      <h2>Radio 单选框</h2>
      <p>
        在一组备选项中进行单选。
      </p>

    </div>
    <!-- 功能 -->
    <h3>基本用法</h3>
    <div class="main-function">
      <radio-component label="0"
                       v-model="test"></radio-component>
      <radio-component label="1"
                       v-model="test"></radio-component>
      <p>
        代码实现如下。
      </p>
      <code-component>
        &lt;radio-component label="0"
        v-model="test"&gt;
        <br>&lt;/radio-component&gt;
        <br>
        &lt;radio-component label="1"
        v-model="test"&gt;
        <br>
        &lt;/radio-component&gt;
      </code-component>
      <p>Radio 组件中封装了 label 属性表示状态, 0 是非选中, 1 是选中,当没有给出选项的内容的时候会以 0 和 1 来显示。</p>
      <h3>进阶用法</h3>
      <radio-group-component v-model="gender">
        <radio-component label="0">男</radio-component>
        <radio-component label="1">女</radio-component>
      </radio-group-component>
      <p>通过使用 group 组件来管理,代码实现如下。</p>

      <code-component>
        &lt;radio-group-component v-model="gender"&gt;
        <br>
        &nbsp;&nbsp;&lt;radio-component label="0"&gt;男&lt;/radio-component&gt;
        <br>
        &nbsp;&nbsp;&lt;radio-component label="1"&gt;女&lt;/radio-component&gt;
        <br>
        &lt;/radio-group-component&gt;
      </code-component>
      <p>Radio 组件外使用了 Radio-Group 组件来管理他,外部组件可以包含内容的属性,可以通过这个属性的值获取到当前 Radio 的 label 数值方便使用。</p>

    </div>
  </div>

</template>

<script>
export default {
  name: 'RadioPage',
  data () {
    return {
      gender: '3',
      test: '3'
    }
  }
}
</script>

<style scoped>
h2,
h3,
p {
  position: relative;
  color: #1f2f3d;
}
h2 {
  font-weight: 400px;
  font-size: 28px;
}
h3 {
  margin-top: 35px;
  margin-bottom: 20px;
}
p {
  font-size: 13px;
  color: #5e6d82;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
  margin-bottom: 35px;
  margin-top: 15px;
}
</style>
