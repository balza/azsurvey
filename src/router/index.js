import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Survey from 'components/Survey'
import NavTabs from 'components/NavTabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavTabs',
      component: NavTabs,
      children: [
        {
          path: '/hello',
          name: 'Hello',
          component: Hello
        },
        {
          path: '/survey',
          name: 'Survey',
          component: Survey
        }
      ]
    }
  ]
})

