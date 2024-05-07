<template>
  <div>
    <!-- 顶部文字 -->
    <div class="code-topword">
      <h2>Form 内容整合框</h2>
      <p>
        整体调用和管理其他组件。
      </p>

    </div>
    <!-- 功能 -->
    <h3>基本用法</h3>
    <div>
      <form-component :model="model"
                      label-width="60px">
        <form-item-component label="用户名">
          <input-component placeholder="请输入用户名"
                           v-model="model.username"></input-component>
        </form-item-component>
        <form-item-component label="选择">
          <switch-component v-model="model.active"></switch-component>
        </form-item-component>
      </form-component>
    </div>
    <p>
      代码实现如下。
    </p>
    <code-component>
      &lt;form-component :model="model"
      label-width="60px"&gt;
      <br>
      &nbsp; &nbsp;&lt;form-item-component label="用户名"&gt;
      <br>
      &nbsp; &nbsp;&nbsp; &nbsp;&lt;input-component placeholder="请输入用户名"
      <br>
      &nbsp; &nbsp;&nbsp; &nbsp;v-model="model.username"&gt; &lt;/input-component&gt;
      <br>
      &nbsp; &nbsp;&lt;/form-item-component&gt;
      <br>
      &nbsp; &nbsp;&lt;form-item-component label="选择"&gt;
      <br>
      &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&lt;switch-component v-model="model.active"&gt; &lt;/switch-component&gt;
      <br>
      &nbsp; &nbsp;&lt;/form-item-component&gt;
      <br>
      &lt;/form-component&gt;
    </code-component>
    <p>Form 组件最外部是一层 Form-component, 里面的具体内容需要套一层 Form-item-component 组件,然后把需要添加的组件加入 Form-item-component 标签内部。
    </p>

    <p>内部组件的使用方式和在其他模块中介绍的一样, Form 的作用是整体管理数据。</p>
    <p>封装的 model 属性里面有所有需要传的参数,这个 model 是一个对象的数据类型,而 Form-item 的 label 则是对内部组件的描述。</p>
  </div>

</template>

<script>
export default {
  name: 'FormPage',
  data () {
    return {
      model: {
        username: '',
        avtive: true
      }
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
