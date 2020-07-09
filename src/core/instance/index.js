import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)   // TODO 初始化
}

initMixin(Vue)            // TODO 初始化混入
stateMixin(Vue)           // TODO 初始化状态
eventsMixin(Vue)          // TODO 初始化事件
lifecycleMixin(Vue)       // TODO 初始化生命周期
renderMixin(Vue)          // TODO 渲染函数

export default Vue
