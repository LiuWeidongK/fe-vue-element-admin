/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const analyzeRouter = {
  path: '/analyze',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Analyze',
  meta: {
    title: '分析模块',
    icon: 'excel'
  },
  children: [
    {
      path: 'grade-analysis',
      component: () => import('@/views/system/analyze/grade-analysis'),
      name: 'GradeAnalysis',
      meta: { title: '年级分析' }
    },
    {
      path: 'major-analysis',
      component: () => import('@/views/system/analyze/major-analysis'),
      name: 'MajorAnalysis',
      meta: { title: '专业分析' }
    },
    {
      path: 'class-analysis',
      component: () => import('@/views/system/analyze/class-analysis'),
      name: 'ClassAnalysis',
      meta: { title: '班级分析' }
    },
    {
      path: 'city-analysis',
      component: () => import('@/views/system/analyze/city-analysis'),
      name: 'CityAnalysis',
      meta: { title: '城市分析' }
    }
  ]
}

export default analyzeRouter
