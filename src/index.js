import Button from '../packages/button/index.js'

const components = [Button]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component) // 每个组件需提供 name 属性
  })
}

export default {
  install,
  Button
}