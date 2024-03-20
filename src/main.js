import { createApp } from 'vue'
import router from './router'
import './css/index.css'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'
import loadingImage from './imgs/che.jpg'
import loadingDirective from './components/Loading/directive'

createApp(App)
  .use(router)
  .use(lazyPlugin, {
    loading: loadingImage
  })
  .directive('loading', loadingDirective)
  .mount('#app')
