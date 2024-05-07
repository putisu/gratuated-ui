<template>
  <div>
    <!-- 顶部文字 -->
    <div class="input-topword">
      <h2>Input 输入框</h2>
      <p>
        通过鼠标或键盘输入字符
      </p>
      <p>Input 的内容需要做可持续化处理,也就是说绑定了 v-model, 你需要在export default -> data 里面接收这些数据来保存。</p>

    </div>
    <!-- 主要功能 -->
    <div class="main-function">
      <div class="default-input">
        <h3>基本用法</h3>
        <p>
          一个基础的输入框
        </p>
        <input-component placeholder="请输入用户名"
                         v-model="username1"
                         width="400px"></input-component>
        <br><br>
        <input-component placeholder="请输入用户名"
                         width="400px"></input-component>
        <p>代码实现如下</p>
        <code-component>
          &lt;input-component placeholder="请输入用户名"
          v-model="username1"&gt;<br>&lt;/input-component&gt;
        </code-component>

        <p>
          您可以看到,该组件默认需要赋一个 username1, 你也可以自定义其属性,这是为了持久化保存数据,你可以通过 Vue 或 JS 提取输入的内容。
        </p>
        <p>
          默认会显示 username 的默认值,如果你不希望他显示内容请给 username 赋值为空。
        </p>
        <p>
          placeholder属性可以赋值为''如果您不需要它。
        </p>
      </div>
      <div class="other-input">
        <h3>其他用法</h3>
        <p>
          展示了该封装组件的其他功能。
        </p>
        <input-component placeholder="请输入用户名"
                         v-model="username2"
                         clearable></input-component>
        <br><br>
        <input-component placeholder="请输入用户名"
                         v-model="username3"
                         type="password"
                         name="username"
                         show-password></input-component>
        <br><br>
        <input-component placeholder="请输入用户名"
                         type="password"
                         name="username"
                         disabled="disabled"></input-component>
      </div>
      <p>
        他的代码实现方法如下。
      </p>
      <div class="code">
        <code-component>
          &lt;input-component placeholder="请输入用户名"
          <br>
          v-model="username2"
          clearable&gt;&lt;/input-component&gt;
        </code-component>
        <code-component>
          &lt;input-component placeholder="请输入用户名"
          v-model="username3"
          type="password"
          name="username"
          show-password&gt;
          &lt;/input-component&gt;
        </code-component>
        <code-component>
          &lt;input-component placeholder="请输入用户名"
          type="password"
          name="username"
          disabled="disabled"&gt;&lt;/input-component&gt;
        </code-component>
      </div>
      <p>
        封装了 clearable, show-password, disable 三个参数,您可以利用他们在 input 框后添加一个icon来控制内容的方法。
      </p>
      <p>
        请注意, clearable 和 show-password 是互斥的。
      </p>
      <h3>组合用法</h3>
      <p>
        您可以在 input 的内容框中添加 icon 来达到您想要的效果。
      </p>

      <input-component placeholder="请输入用户名"
                       v-model="username4"
                       width="300px">
        <div class="icon-douyinzhanghao icon"></div>
      </input-component>
    </div>

  </div>

</template>

<script>
export default {
  name: 'InputPage',
  data () {
    return {
      visible: false,
      username1: 'zs',
      username2: 'ls',
      username3: 'ww',
      username4: ' '
    }
  }
}
</script>

<style scoped>
.i-input {
  width: 200px;
}

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
.icon {
  position: absolute;
  margin-left: 10px;
}
</style>
