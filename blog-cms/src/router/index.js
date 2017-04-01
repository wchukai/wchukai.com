import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import drafts from '@/components/drafts.vue'
import editor from '@/components/editor.vue'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      component: index,
      alias: '/cms'
    },
    {
      path: '/articleDrafts',
      component: drafts,
      alias: '/cms/articleDrafts'
    },
    {
      path: '/editor',
      component: editor,
      alias: '/cms/editor'
    }
  ]
})