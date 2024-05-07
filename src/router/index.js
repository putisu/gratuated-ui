import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutPage from '../components/layout.vue'
import ButtonPage from '../components/button.vue'
import DialogPage from '../components/dialog.vue'
import InputPage from '../components/input.vue'
import SwitchPage from '../components/switch.vue'
import RadioPage from '../components/radio.vue'
import CheckboxPage from '../components/checkbox.vue'
import FormPage from '../components/form.vue'
import CodePage from '../components/code.vue'
import LayoutCssPage from '../components/layoutcss.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutPage,
      children: [
        {
          path: 'button',
          name: 'button',
          component: ButtonPage
        },
        {
          path: '/dialog',
          name: 'dialog',
          component: DialogPage
        },
        {
          path: '/input',
          name: 'input',
          component: InputPage
        },
        {
          path: '/switch',
          name: 'switch',
          component: SwitchPage
        },
        {
          path: '/radio',
          name: 'radio',
          component: RadioPage
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: CheckboxPage
        },
        {
          path: '/form',
          name: 'form',
          component: FormPage
        },
        {
          path: '/code',
          name: 'code',
          component: CodePage
        },
        {
          path: '/layoutcss',
          name: 'layoutcss',
          component: LayoutCssPage
        }
      ]
    }]
}
)

export default router
