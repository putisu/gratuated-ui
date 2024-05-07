<template>
  <div>
    <!-- 顶部文字 -->
    <div class="switch-topword">
      <h2>Switch 开关</h2>
      <p>
        表示两种相互对立的状态间的切换,多用于触发「开/关」。
      </p>

    </div>
    <!-- 主要功能 -->
    <h3>基本用法</h3>
    <div>
      <switch-component v-model="activeSwitch1">
      </switch-component>
      <p>
        基础的组件包含两个状态,激活和非激活状态,代码实现如下。
      </p>
      <code-component> &lt;switch-component v-model="activeSwitch1"&gt;
        &lt;/switch-component&gt;
      </code-component>
      <p>这边封装了一个基础的 activeSwitch 属性来保存按钮的状态,请注意,如果您在一个页面使用了多个按钮,请给他赋不同的值以免互相影响。</p>
      <!-- 其他用法 -->
      <h3>其他用法</h3>
      <p>我们还封装了一些其他效果的 Swtich 组件。</p>
      <p>下面是改变了颜色的组件。</p>
      <switch-component v-model="activeSwitch2"
                        active-color="blue"
                        inactive-color="green"
                        name="username"></switch-component>
      <p></p>
      <code-component>
        &lt;switch-component v-model="activeSwitch2"
        active-color="blue"
        <br>
        inactive-color="green"
        name="username"&gt;&lt;/switch-component&gt;
      </code-component>
      <p>这里封装了 active-color, inactive-color 和 name, 他们分别代表激活的时候的颜色,非激活状态的颜色,以及给Switch添加了一个name属性方便选取以改变参数。</p>
      <p>下面是添加了插槽的组件。</p>
      <switch-component v-model="activeSwitch3">
        <div class="abc">启动</div>
      </switch-component>
      <p></p>
      <code-component>
        &lt;switch-component v-model="activeSwitch3"&gt;
        <br>
        &nbsp; &nbsp;&lt;div class="abc"&gt;启动&lt;/div&gt;
        <br>
        &lt;/switch-component&gt;
      </code-component>
      <p>您可以在组件中添加标签来一起控制他们的颜色状态。</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SwitchPage',
  data () {
    return {
      activeSwitch1: false,
      activeSwitch2: false,
      activeSwitch3: false
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
.abc {
  margin-left: 50px;
  width: 30px;
}
</style>
