<template>
  <div>
    <!-- 顶部文字 -->
    <div class="code-topword">
      <h2>Code 代码框</h2>
      <p>
        高亮显示代码内容。
      </p>

    </div>
    <!-- 功能 -->
    <h3>基本用法</h3>
    <div>
      <code-component width="300px">please enter your code here</code-component>
    </div>
    <p>
      代码实现如下。
    </p>
    <code-component>
      &lt;code-component width="300px"&gt;please enter your code here&lt;/code-component&gt;
    </code-component>
    <p>Code 组件中使用了 可以控制整个组件的宽度,同时可以传入一些内容。
    </p>
    <h3>进阶用法</h3>
    <p>目前Code组件中只做了基础的内容,后续可以根据需要更改slot传入的一些参数。</p>
    <code-component>
      const codeContent = this.$slots.default[0].text.toString()
      <br>
      return codeContent
    </code-component>
    <p>根据根目录文件代码可知,传入的slot是可以进行更改的,只需要获取当前传入的slot并且使用类似于replace一类的函数就可以更改他的显示。</p>
  </div>

</template>

<script>
export default {
  name: 'CodePage'
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
