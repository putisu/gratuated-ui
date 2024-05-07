<template>
  <div class="mainitem">
    <!-- 顶部栏 -->
    <div class="top-bar">
      <div class="container">
        <h2 class="logo"
            href="#">Gratuated-UI</h2>
        <nav>
          <router-link to="/">Home</router-link>
        </nav>
      </div>
    </div>
    <!-- 内容加菜单栏 -->
    <div class="wrap">
      <div class="nav">
        <div class="btn">
          <div class="btn-item"></div>
          <div class="btn-item"></div>
          <div class="btn-item"></div>
        </div>
        <div class="icon">
          <div class="icon-con">
            <p>目录 <span>
              </span></p>
            <h6>Directory</h6>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="title">
          <p>组件</p>
          <h6>Component</h6>
        </div>
        <div class="menu">
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">
              <router-link to="/button">
                <p>Button</p>
              </router-link>
            </div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">
              <router-link to="/dialog">
                <p>Dialog</p>
              </router-link>
            </div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">
              <router-link to="/input">
                <p>Input</p>
              </router-link>
            </div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">
              <router-link to="/switch">
                <p>Switch</p>
              </router-link>
            </div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con"><router-link to="/radio">
                <p>Radio</p>
              </router-link></div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con"><router-link to="/checkbox">
                <p>Checkbox</p>
              </router-link></div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con"><router-link to="/code">
                <p>Code</p>
              </router-link></div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con"><router-link to="/form">
                <p>Form</p>
              </router-link></div>
            <div class="ricon"></div>
          </div>
        </div>
        <div class="line"></div>
        <div class="title">
          <p>样式</p>
          <h6>Style</h6>
        </div>
        <div class="serve">
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con"><router-link to="/layoutcss">
                <p>Bootstrap</p>
              </router-link></div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">2</div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">3</div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">4</div>
            <div class="ricon"></div>
          </div>
          <div class="item">
            <div class="light"></div>
            <div class="licon">
              <span class="icon-douyinzhanghao"></span>
            </div>
            <div class="con">5</div>
            <div class="ricon"></div>
          </div>
        </div>
      </div>
      <!-- 安装说明 -->
      <div class="install"
           v-if="visible">
        <h2>安装</h2>
        <h3>NPM 安装</h3>
        <p>
          通过 YARN 安装 NPM 的依赖包, NPM 能更好地和 webpack 打包工具配合使用。
        </p>
        <div class="yarn-code">
          <code-component width="700px">YARN add gratuated-ui</code-component>
        </div>
        <p>
          当安装完后，可以在 Modules 中查看到新安装的 Gratuated-UI 的组件库,接下来需要声明该组件库以使用,我们推荐使用全局注册的方法
        </p>
        <p>
          通过在入口文件的 index.js 中加入以下代码来声明。
        </p>
        <div class="yarn-code">
          <code-component width="700px">import GratuatedUI from 'gratuated-ui'</code-component>
        </div>
        <div class="yarn-code">
          <code-component width="700px">import 'gratuated-ui/dist/gratuated-ui.css'</code-component>
        </div>
        <div class="yarn-code">
          <code-component width="700px">vue.use(GratuatedUI)</code-component>
        </div>
        <h2>使用</h2>
        <h3>组件使用</h3>
        <p>通过组件 -component 即可引入基础组件,具体的控制项和数据流请查看具体目录。</p>
        <h3>样式使用</h3>
        <p>通过直接复制网站给出的 HTML 代码, CSS 代码和 JavaScript 代码 来搭建相同的 Style 样式,你也可以通过改变其中的某些值达到自定义的效果。</p>
      </div>
      <router-view class="router-item"></router-view>
    </div>
    <!-- 底边栏 -->
    <div class="footer">
      <div class="container-footer">
        <span class="first-span">
          <a href="https://space.bilibili.com/351542179"
             class="icon-douyinzhanghao">
          </a>
          <h5>bilibili</h5>
        </span>
        <span>
          <a href="https://github.com/putisu?tab=repositories"
             class="icon-douyinzhanghao"></a>
          <h5>github</h5>
        </span>
      </div>
    </div>
    <!-- 默认背景 -->
    <div class="bg">
      <div class="container-bg">
        <div class="bubbles">
          <span style="--i:11;"></span>
          <span style="--i:12;"></span>
          <span style="--i:24;"></span>
          <span style="--i:10;"></span>
          <span style="--i:14;"></span>
          <span style="--i:23;"></span>
          <span style="--i:18;"></span>
          <span style="--i:16;"></span>
          <span style="--i:19;"></span>
          <span style="--i:20;"></span>
          <span style="--i:21;"></span>
          <span style="--i:25;"></span>
          <span style="--i:10;"></span>
          <span style="--i:12;"></span>
          <span style="--i:23;"></span>
          <span style="--i:14;"></span>
          <span style="--i:20;"></span>
          <span style="--i:24;"></span>
          <span style="--i:13;"></span>
          <span style="--i:18;"></span>
          <span style="--i:26;"></span>
          <span style="--i:13;"></span>
          <span style="--i:25;"></span>
          <span style="--i:12;"></span>
          <span style="--i:15;"></span>
          <span style="--i:26;"></span>
          <span style="--i:13;"></span>
          <span style="--i:10;"></span>
          <span style="--i:21;"></span>
          <span style="--i:14;"></span>
          <span style="--i:13;"></span>
          <span style="--i:10;"></span>
          <span style="--i:12;"></span>
          <span style="--i:15;"></span>
          <span style="--i:12;"></span>
          <span style="--i:21;"></span>
          <span style="--i:22;"></span>
          <span style="--i:24;"></span>
          <span style="--i:11;"></span>
          <span style="--i:20;"></span>
          <span style="--i:13;"></span>
          <span style="--i:25;"></span>
          <span style="--i:17;"></span>
          <span style="--i:14;"></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LayoutPage',
  data () {
    return {
      visible: {
        type: Boolean,
        default: false
      }
    }
  },
  watch: {
    $route (to) {
      if (to.path === '/') {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  // color: rgba(242, 241, 246, 0.576);
}
.mainitem {
  height: auto;
}
// 顶部栏样式
.top-bar {
  background: linear-gradient(
    to bottom,
    #a1c4fd,
    #ffffff
  ); /* 渐变颜色从偏浅青色到白色 */
  color: #fff;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  color: rgb(68, 68, 68);
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

nav a {
  color: rgb(68, 68, 68);
  text-decoration: none;
  margin-left: 20px;
  font-size: 16px;
}

nav a:hover {
  text-decoration: underline;
}
.top-bar {
  padding: 10px;
  transition: box-shadow 0.6s;
}
// 菜单栏样式
.wrap {
  color: rgba(242, 241, 246, 0.576);
  width: 70vw;
  height: 100vh;
  margin-left: 25vw;
  align-items: center;
  justify-content: center;
}
.nav {
  width: 100px;
  height: 800px;
  background: rgba(86, 86, 86, 0.8);
  border-radius: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: 0.5s;
  &:hover {
    width: 280px;
  }
}
::-webkit-scrollbar {
  display: none;
}
.btn {
  width: 60px;
  height: 10px;
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
  margin-top: 20px;
}
.btn-item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.btn-item:first-child {
  background: #eb5a56;
}
.btn-item:nth-child(2) {
  background: #f8bc33;
}
.btn-item:last-child {
  background: #62cb44;
}
.icon {
  width: 200px;
  height: 60px;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
}
.icon-con {
  height: 60px;
  p {
    font-size: 25px;
    padding-top: 5px;
  }
  h6 {
    padding-top: 15px;
    font-weight: 400;
  }
  span {
    padding-left: 50px;
  }
}
.line {
  width: 60px;
  height: 1px;
  background: rgba(205, 205, 205, 0.5);
  margin: 20px 20px;
  transition: 0.5s;
}
.nav:hover .line {
  width: 230px;
}
.title {
  width: 60px;
  margin-left: 20px;
  margin-bottom: 20px;
  p {
    font-size: 14px;
  }
}
.menu {
  width: 230px;
  margin-left: 20px;
}
.item {
  display: flex;
  position: relative;
  transition: 0.5s;
  border-radius: 16px;
  &:hover {
    background: #4b4b4b;
  }
}
.licon {
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.con {
  width: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  left: -20px;
  opacity: 0;
  p {
    color: rgba(242, 241, 246, 0.576);
  }
}
.nav:hover .con {
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}
.iconfont {
  font-size: 26px;
}
.light {
  width: 6px;
  height: 50px;
  background: #501212;
  position: absolute;
  left: -20px;
  transition: 0.5s;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: 0;
}
.item:hover .light {
  opacity: 1;
}
.serve {
  width: 60px;
  background: rgb(46, 45, 45);
  margin-left: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
}
.nav:hover .serve {
  width: 230px;
}
.nav {
  z-index: 10;
  position: absolute;
}
.router-item {
  margin-left: 130px;
  color: #5e6d82;
}
h2 {
  cursor: default;
}

// 背景样式
.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  height: 100vh;
  width: 90vw;
  margin-left: 100px;
}
.container-bg {
  position: relative;
  width: 90vw;
  height: 100vh;
  overflow: hidden;
  opacity: 0.2;
}
.bubbles {
  position: relative;
  display: flex;
  span {
    position: relative;
    width: 30px;
    height: 30px;
    background: #abdee6;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #abdee644, 0 0 50px #abdee6, 0 0 100px #abdee6;
    animation: animate 15s linear infinite;
    animation-duration: calc(125s / var(--i));
  }
  span:nth-child(even) {
    background: #a2dd83;
    box-shadow: 0 0 0 10px #a2dd8344, 0 0 50px #a2dd83, 0 0 100px #a2dd83;
  }
}
@keyframes animate {
  0% {
    transform: translateY(200vh) scale(0);
  }
  100% {
    transform: translateY(-50vh) scale(1);
  }
}

// 缩放
@media only screen and (max-width: 1000px) {
  .bg {
    opacity: 0;
  }
  .nav {
    display: none;
  }
  .wrap {
    margin-left: 0;
    transition: all 0.3s ease;
  }
}
// 安装提示
.install {
  padding-top: 50px;
  h2,
  h3,
  p {
    color: #1f2f3d;
    margin-left: 150px;
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
    color: #5e6d82;
    font-size: 13px;
    margin-top: 15px;
  }
  .yarn-code {
    margin-left: 150px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
// 底边栏
.footer {
  padding: 10px;
  margin-top: 200px;
  text-align: center;
  background-color: #f0f0f0;
  transform: translateY(0);
  transition: transform 0.3s;
  height: 350px;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.05);
  }
}

.mainitem {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wrap {
  flex: 1;
}

.container-footer {
  .first-span {
    padding-top: 230px;
  }
  span {
    display: inline-block;
    padding-left: 1600px;
    padding-top: 20px;
    height: 60px;
    width: 100px;
    a {
      display: inline;
      font-size: 26px;
      color: #1e252f;
    }
    h5 {
      margin-left: 15px;
      padding-bottom: 25px;
      color: #5e6d82;
      display: inline;
    }
  }
}
</style>
