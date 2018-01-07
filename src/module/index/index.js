// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '../../components/Index'
import  clientRouter  from '../../router/client'
import ElementUI from 'element-ui';
import 'assets/css/common.css'
import 'assets/css/normalize.css';
import 'babel-polyfill';
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router: clientRouter,
  template: '<Index/>',
  components: { Index }
})
