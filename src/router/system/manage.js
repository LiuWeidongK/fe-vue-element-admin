/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const manageRouter = {
  path: '/manage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Manage',
  meta: {
    title: '管理面板',
    icon: 'excel'
  },
  children: [
    {
      path: 'student-info',
      component: () => import('@/views/system/manage/student-info'),
      name: 'StudentInformation',
      meta: { title: '学生信息管理' }
    },
    {
      path: 'graduate-destination',
      component: () => import('@/views/system/manage/graduate-destination'),
      name: 'GraduateDestination',
      meta: { title: '毕业去向管理' }
    }
  ]
}

export default manageRouter
