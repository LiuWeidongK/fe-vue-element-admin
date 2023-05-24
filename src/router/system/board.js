/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const boardRouter = {
  path: '/board',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/system/board/index.vue'),
      name: 'Registration',
      meta: { title: '留言交流', icon: 'clipboard' }
    }
  ]
}

export default boardRouter
