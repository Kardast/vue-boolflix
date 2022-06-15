import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'
// import { faUserSecret } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fasStar, farStar)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


Vue.component('lang-flag', LangFlag);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
