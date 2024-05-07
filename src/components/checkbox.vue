<template>
  <div>
    <!-- 顶部文字 -->
    <div class="checkbox-topword">
      <h2>Checkbox 多选框</h2>
      <p>
        在一组备选项中进行多选。
      </p>

    </div>
    <!-- 功能 -->
    <h3>基本用法</h3>
    <div>
      <checkbox-component v-model="activeCheckbox">是否选中</checkbox-component>

    </div>
    <p>
      代码实现如下。
    </p>
    <code-component>
      &lt;checkbox-component v-model="activeCheckbox"&gt;是否选中&lt;/checkbox-component&gt;
    </code-component>
    <p>Checkbox 组件中使用了 acitveCheckbox 这个 v-model 属性值,使用 v-model 就可以根据用户的操作去更改这个数值。
    </p>
    <p> 当这个值为 1 的时候相当于被选中,当为 0 的时候相当于未被选中,相当于通过改变它的 value 来控制每一项的选中与否。</p>
    <h3>进阶用法</h3>
    <checkbox-group-component v-model="hobby">
      <checkbox-component label="吃饭"></checkbox-component>
      <checkbox-component label="喝水"></checkbox-component>
      <checkbox-component label="运动"></checkbox-component>
    </checkbox-group-component>
    <p>通过使用 group 组件来管理,代码实现如下。</p>

    <code-component>
      &lt;checkbox-group-component v-model="hobby"&gt;
      <br>
      &nbsp;&nbsp;&lt;checkbox-component label="吃饭"&gt;&lt;/checkbox-component&gt;
      <br>
      &nbsp;&nbsp;&lt;checkbox-component label="喝水"&gt;&lt;/checkbox-component&gt;
      <br>
      &nbsp;&nbsp;&lt;checkbox-component label="运动"&gt;&lt;/checkbox-component&gt;
      <br>
      &lt;/checkbox-group-component&gt;
    </code-component>
    <p>类似于 Radio, Checkbox 也有自己的 Checkboxgroup 分组管理标签,通过这个标签就可以整体的管理这些属性的值和内容。</p>
    <p> 这边举的例子是 hobby, 然后每一个单独的还有自己的 label, hobby 是所有的数值集合, label 可以控制更改所有的内容。</p>
  </div>

</template>

<script>
export default {
  name: 'CheckboxPage',
  data () {
    return {
      activeCheckbox: false,
      hobby: []
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
