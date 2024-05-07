<template>
  <div>
    <!-- 顶部文字 -->
    <div class="dialog-topword">
      <h2>Dialog 对话框</h2>
      <p>
        在保留当前页面状态的情况下,告知用户并承载相关操作。
      </p>
      <h3>基本用法</h3>
      <p>
        Dialog 弹出一个对话框,适合需要定制性更大的场景。
      </p>
    </div>
    <!-- 功能展示 -->
    <div class="dialog-function">
      <div>
        <e-button type="primary"
                  @click="visible = true">显示</e-button>
      </div>
      <dialog-component title="提示"
                        width="40%"
                        top="100px"
                        :visible.sync="visible">
        1
        <template v-slot:footer>
          <e-button type="primary"
                    @click="visible = false">确定</e-button>
          <e-button @click="visible = false">取消</e-button>
        </template>
      </dialog-component>
    </div>
    <p>
      您可以点击上面的按钮来触发对话框的出现,他的实现代码如下。
    </p>
    <!-- 代码 -->
    <code-component>
      &lt;div class="dialog-function"&gt;
      <br>
      &nbsp;&nbsp;&lt;div&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;e-button type="primary"<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@click="visible = true"&gt;显示&lt;/e-button&gt;<br>
      &nbsp;&nbsp;&lt;/div&gt;<br><br>
      &nbsp;&nbsp;&lt;dialog-component title="提示"
      width="40%"
      top="100px"
      :visible.sync="visible"&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;1 <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;template v-slot:footer&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;e-button type="primary"<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@click="visible = false"&gt;确定&lt;/e-button&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;e-button @click="visible = false"&gt;取消&lt;/e-button&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/template&gt;<br>
      &nbsp;&nbsp;&lt;/dialog-component&gt;<br>
      &lt;/div&gt;<br>
    </code-component>
    <!-- 解析 -->
    <div class="main-function-word">
      <h3>代码解析</h3>
      <p>
        第三行的 button 是直接体现的按钮功能,我们给他绑定了一个click方法控制对话框的显示隐藏。
      </p>
      <p>
        对话框内部的内容我们给了一个基础的设计,你可以修改 title 和 1 的位置的内容,当然你也可以使用其他组件来组合开发,比如在 1 的位置加入 input 或者其他你需要的组件。
      </p>
      <p>
        你可以修改 width 和 top 的数值来控制对话框的位置和大小。
      </p>
      <h3>组合对话框</h3>
      <p>
        不同组件组合构成特殊对话框,这里我们以 input 组件为例。
      </p>
      <!-- 改变的对话框 -->
      <div class="dialog-function-change">
        <div>
          <e-button type="primary"
                    @click="visible1 = true">打开组合对话框</e-button>
        </div>
        <dialog-component title="提示"
                          width="40%"
                          top="100px"
                          :visible.sync="visible1">
          <input-component placeholder="请输入用户名"
                           v-model="username1"></input-component>
          <template v-slot:footer>
            <e-button type="primary"
                      @click="visible1 = false">确定</e-button>
            <e-button @click="visible1 = false">取消</e-button>
          </template>
        </dialog-component>
      </div>
      <!-- 原理 -->
      <p>
        他的实现方法如下,在 1 的部分替换为
      </p>

      <code-component>&lt;input-component placeholder="请输入用户名"
        v-model="username1"&gt;<br>&lt;/input-component&gt;</code-component>
      <p>
        请注意,如果你在一个页面使用了不止一个dialog,因为控制他们显示隐藏的数据都是visible,您需要给他们赋不同的属性值才能互相直接不会直接影响。
      </p>
      <p>您需要修改第四行的 @click="<span>visible</span> = true",第六行的 :visible.sync="<span>visible</span> ",第十,第十一行的@click="<span>visible</span> = false"。</p>
      <p>您可以在 export default -> data 中自定义他的名称。</p>
      <p>
        注意：如果 visible 属性存储在 Vuex 内,此时需要去除 .sync 修饰符,同时监听 Dialog 的 open 和 close 事件,在事件回调中执行 Vuex 中对应的 mutation 更新 visible 属性绑定的变量的值。
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DialogPage',
  data () {
    return {
      visible: false,
      visible1: false,
      username1: ''
    }
  }
}
</script>

<style lang="scss" scoped>
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
  span {
    color: rgb(126, 53, 53);
  }
}
</style>
