import Vue from 'vue'
import Router from 'vue-router'
import Profile from 'components/Profile'
import Survey from 'components/Survey'
import NavTabs from 'components/NavTabs'
import Administration from 'components/Administration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavTabs',
      component: NavTabs,
      children: [
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/survey',
          name: 'Survey',
          component: Survey
        },
        {
          path: '/administration',
          name: 'Administration',
          component: Administration
        }
      ]
    }
  ]
})

