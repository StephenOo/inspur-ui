import InspurButton from './src/button.vue'

InspurButton.install = function(Vue) { // 提供给按需加载的能力
  Vue.component(InspurButton.name, InspurButton)
}

export default InspurButton