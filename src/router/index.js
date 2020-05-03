import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// board routes
import Board from '@/components/board/Board'
import Card from '@/components/board/card/Card'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/board',
      component: Board
    },
    {
      path: '/board/card',
      component: Card
    }
  ]
})
