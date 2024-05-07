<template>
  <div class="l-layout">
    <div class="container">
      <div class="word-1">
        <h2>响应式栅格布局</h2>
        <h3>引入Bootstrap</h3>
        <p>
          在 CSS 中添加以下代码来引入 Boostrap 的 CSS 样式表,你可能需要找到对应的 HTML 网页添加以下代码才能生效。
        </p>
        <code-component width="800px">&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"&gt;</code-component>

        <p>
          在 JS 中添加以下代码来引入 Boostrap 的 JS 功能表,你可以引入到全局组件 main.js 中来全局声明,但是,这可能会造成你的样式表混乱。
        </p>
        <code-component width="800px">&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/mhDoLbDldZc3qpsJHpLogda//BVZbgYuw6kof4u2FrCedxOtgRZDTHgHUhOCVim"crossorigin="anonymous"&gt;&lt;/script&gt;</code-component>

        <p>
          对于 VUE 项目,你可以将他们添加到 public/index.html, 请注意,这和全局注册一样会造成大量的样式混乱。
        </p>
        <h3>栅格系统详解</h3>
        <p>
          栅格系统本质上是把页面分为多个等份(1-12)的形式,你可以通过下面的列表了解什么是栅格系统。
        </p>

        <!-- 表 -->
        <table>
          <thead>
            <tr>
              <th>类型</th>
              <th>含义</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>col</td>
              <td>定义网格系统中的列</td>
            </tr>
            <tr>
              <td>ms</td>
              <td>定义列的偏移</td>
            </tr>
            <tr>
              <td>xs</td>
              <td>设置在&lt;768px显示的列数</td>
            </tr>
            <tr>
              <td>sm</td>
              <td>设置在768px≤992px显示的列数</td>
            </tr>
            <tr>
              <td>md</td>
              <td>设置在992px≤1200px显示的列数</td>
            </tr>
            <tr>
              <td>lg</td>
              <td>设置在1200px≤1920px显示的列数</td>
            </tr>
            <tr>
              <td>xl</td>
              <td>设置在≥1920px显示的列数</td>
            </tr>

          </tbody>
        </table>

        <p>
          通过表格,我们可以给想要的组件添加类名来添加效果,例 "col-xs-8", 或者 "ms-4"。
        </p>

        <h3>响应式详解</h3>
        <p>
          你可以通过缩放网页查看不同的部件所占比率的变化。
        </p>
      </div>

      <div class="row">
        <div class="col-12  col-md-4">Part 1</div>
        <div class="col-12  col-md-6">Part 2</div>
        <div class="col-12-1">Part 3</div>
      </div>

      <div class="word-2">
        <p>
          上述例子中 Part1 是 col-lg-8, col-md-6, col-sm-4, Part2 是 col-lg-4, col-md-6, col-sm-8 Part3 是 col-12。
        </p>
        <p>
          他们的意思是在 1200px 以上的屏幕尺寸下, Part1占据四分之三 Part2 占据四分之一。
          <br>
          在 992px 到 1200px 的屏幕尺寸下, Part1, Part2 各占据一半。
          <br>
          在 768px 到 992px 的屏幕尺寸下, Part1占据四分之一 Part2 占据四分之三。
          <br>
          在任意尺寸下, Part3都占据整个宽度。
        </p>
      </div>

      <div class="word-3">
        <h3>实操</h3>
        <p>
          给对应的标签添加指定的类名即可使用 Boostrap 的效果,当然你也可以使用css达到某些功能来自定义,如下面的代码所示。
        </p>
        <code-component>@media (min-width: 992px)
          <br>
          {
          .class {
          width: 50%;
          }
          }</code-component>
        <p>
          他和 col-md-6 能做到相同的效果。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutCss'
}

</script>

<style lang="scss" scoped>
.row {
  div {
    margin: 0;
    padding: 0;
    border: 1px solid rgba(82, 41, 41, 0.179);
    text-align: center;
  }
}
.my-content {
  background-color: rgb(162, 218, 237);
  padding: 10px;
  margin: 5px;
  color: #5e6d82;
}
.word-1,
.word-2,
.word-3 {
  margin-left: 0px;
  width: 900px;
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
}

.container {
  max-width: 800px;
  margin: 0;
  padding: 0 15px;
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
}

.row {
  display: flex;
  flex-wrap: wrap;
  color: #5e6d82;
}

.col-12 {
  width: 20vw;
  padding: 10px;
  box-sizing: border-box;
}
.col-12-1 {
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
}

.col-md-6 {
  width: 50%;
}

@media (min-width: 768px) {
  .col-md-4 {
    width: 25%;
  }
  .col-md-6 {
    width: 75%;
  }
}

@media (min-width: 992px) {
  .col-md-6,
  .col-md-4 {
    width: 50%;
  }
}

@media (min-width: 1200px) {
  .col-md-4 {
    width: 75%;
  }
  .col-md-6 {
    width: 25%;
  }
}

table {
  color: #5e6d82;
  width: 50%;
  border-collapse: collapse;
  margin: 20px auto;
}
th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
th {
  background-color: #f0f0f0;
}
</style>
