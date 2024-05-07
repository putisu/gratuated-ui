import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radiogroup'
import Switch from './switch'
import CheckboxGroup from './checkboxgroup'
import Form from './form'
import FormItem from './form-item'
import Code from './code'
import './font/iconfont.css'

const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Code
]

const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

export default {
  install
}
