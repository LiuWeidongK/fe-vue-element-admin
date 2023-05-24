/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const registrationRouter = {
  path: '/registration',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/system/registration/index.vue'),
      name: 'Registration',
      meta: { title: '去向信息登记', icon: 'clipboard' }
    }
  ]
}

export default registrationRouter
