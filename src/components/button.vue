<template>
  <div>
    <!-- 头部文字 -->
    <div class="button-topword">
      <h2>Button 组件</h2>
      <p>
        常用的操作按钮。
      </p>
      <h3>基础组件展示</h3>
      <p>
        基础的按钮用法。
      </p>
    </div>

    <!-- 功能体现 -->
    <div class="button-function">
      <div class="row">
        <e-button @click="fn">默认按钮</e-button>
        <e-button type='primary'>主要按钮</e-button>
        <e-button type='success'>成功按钮</e-button>
        <e-button type='info'>信息按钮</e-button>
        <e-button type='warning'>警告按钮</e-button>
        <e-button type='danger'>危险按钮</e-button>
      </div>
      <div class="row">
        <e-button plain>朴素按钮</e-button>
        <e-button plain
                  type='primary'>主要按钮</e-button>
        <e-button plain
                  type='success'>成功按钮</e-button>
        <e-button plain
                  type='info'>信息按钮</e-button>
        <e-button plain
                  type='warning'>警告按钮</e-button>
        <e-button plain
                  type='danger'>危险按钮</e-button>
      </div>
      <div class="row">

        <e-button plain
                  round>圆角按钮</e-button>
        <e-button plain
                  round
                  type='primary'>主要按钮</e-button>
        <e-button plain
                  round
                  type='success'>成功按钮</e-button>
        <e-button plain
                  round
                  type='info'>信息按钮</e-button>
        <e-button plain
                  round
                  type='warning'>警告按钮</e-button>
        <e-button plain
                  round
                  type='danger'>危险按钮</e-button>
      </div>
      <div class="row">
        <e-button plain
                  circle>椭圆按钮</e-button>
        <e-button plain
                  circle
                  type='primary'>主要按钮</e-button>
        <e-button plain
                  circle
                  type='success'>成功按钮</e-button>
        <e-button plain
                  circle
                  type='info'>信息按钮</e-button>
        <e-button plain
                  circle
                  type='warning'>警告按钮</e-button>
        <e-button plain
                  circle
                  type='danger'>危险按钮</e-button>
      </div>
      <div class="row">
        <e-button plain
                  circle
                  icon="icon-douyinzhanghao"></e-button>
        <e-button plain
                  circle
                  icon="icon-douyinzhanghao"
                  type='primary'></e-button>
        <e-button plain
                  circle
                  icon="icon-douyinzhanghao"
                  type='success'></e-button>
        <e-button plain
                  circle
                  icon="icon-douyinzhanghao"
                  type='info'></e-button>
        <e-button plain
                  circle
                  icon="icon-douyinzhanghao"
                  type='warning'></e-button>
        <e-button plain
                  circle
                  icon="icon-douyinzhanghao"
                  type='danger'></e-button>
      </div>
    </div>

    <h3>使用方法</h3>
    <p>下面将会具体讲解不同按钮的代码实现方法。</p>

    <!-- 默认按钮 -->
    <div class="default-button">
      <div class="row">
        <e-button @click="fn">默认按钮</e-button>
      </div>
      <code-component>&lt;e-button&gt;默认按钮&lt;/e-button&gt;
      </code-component>
      <br>
      <p>
        您可以直接使用 e-button 标签来使用已经封装的按钮组件,您可以在已经封装的组件中添加您需要的功能,例如,我们这里绑定了一个回调函数 fn, 当您点击默认按钮的时候控制台会输出"我被点击了",你可以换成您需要的。
      </p>
    </div>

    <!-- 其他按钮 -->
    <div class="other-button">
      <div class="row">
        <e-button type='primary'>主要按钮</e-button>
        <e-button type='success'>成功按钮</e-button>
        <e-button type='info'>信息按钮</e-button>
        <e-button type='warning'>警告按钮</e-button>
        <e-button type='danger'>危险按钮</e-button>
      </div>
      <code-component>&lt;e-button type='primary'&gt;主要按钮&lt;/e-button&gt;
      </code-component>
      <code-component>&lt;e-button type='success'&gt;成功按钮&lt;/e-button&gt;
      </code-component>
      <code-component>&lt;e-button type='info'&gt;信息按钮&lt;/e-button&gt;
      </code-component>
      <code-component>&lt;e-button type='warning'&gt;警告按钮&lt;/e-button&gt;
      </code-component>
      <code-component>&lt;e-button type='danger'&gt;危险按钮&lt;/e-button&gt;
      </code-component>
      <br>
      <p>
        您可以直观的看到,我们是使用 type 参数来控制按钮的颜色的,当然你也可以调成你需要的来覆盖,只需要给默认组件添加 class 并加上您需要的样式即可。
      </p>
    </div>

    <!-- 其他样式 -->
    <div class="other-style">
      <div class="row">
        <e-button plain>朴素按钮</e-button>
        <e-button plain
                  round>圆角按钮</e-button>
        <e-button plain
                  circle>椭圆按钮</e-button>
        <e-button plain
                  circle
                  icon="icon-douyinzhanghao"></e-button>
      </div>
      <code-component>&lt;e-button plain'&gt;朴素按钮&lt;/e-button&gt;</code-component>
      <code-component>&lt;e-button plain round'&gt;圆角按钮&lt;/e-button&gt;</code-component>
      <code-component>&lt;e-button circle'&gt;椭圆按钮&lt;/e-button&gt;</code-component>
      <code-component>&lt;e-button circle icon="#"'&gt;&lt;/e-button&gt;</code-component>
      <br>
      <p>
        我们这边封装了 plain, round, circle 三个参数来控制一些基础的 css 样式,在填写文字的时候您可以根据需要添加 icon 或者文字,您也可以组合他们来形成一些特殊的按钮。
      </p>

    </div>
  </div>

</template>

<script>
export default {
  name: 'ButtonPage',
  methods: {
    fn () {
      console.log('我被点击了')
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .e-button {
    margin-right: 20px;
  }
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
</style>
