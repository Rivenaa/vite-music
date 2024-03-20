import { createApp, reactive } from 'vue'
import { addClass, removeClass } from '@/utils/dom'
import Loading from './loading.vue'

const loadingInstances = reactive(new Map())

const reactiveCls = 'g-relative'

const loadingDirective = {
  mounted(el, binding) {
    if (!loadingInstances.has(el)) {
      const app = createApp(Loading)
      const instance = app.mount(document.createElement('div'))
      loadingInstances.set(el, instance)

      // 在这里添加代码
      const title = binding.arg
      if (typeof title !== 'undefined') {
        instance.setTitle(title)
      }
    }

    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }

    const title = binding.arg
    if (typeof title !== 'undefined') {
      const instance = loadingInstances.get(el)
      if (instance) {
        instance.setTitle(title)
      }
    }
  },
  unmounted(el) {
    const instance = loadingInstances.get(el)
    if (instance) {
      instance.$el.remove()
      loadingInstances.delete(el)
    }
  }
}

function append(el) {
  const style = getComputedStyle(el)
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, reactiveCls)
  }

  const instance = loadingInstances.get(el)
  if (instance && !el.contains(instance.$el)) {
    el.appendChild(instance.$el)
  }
}

function remove(el) {
  removeClass(el)

  const instance = loadingInstances.get(el)
  if (instance && el.contains(instance.$el)) {
    el.removeChild(instance.$el)
  }
}

export default loadingDirective
