const personalCenter = r => require.ensure([], () => r(require('@/views/personalCenter/index')), 'personalCenter')


export default [
  {
    path: '/',
    name: 'personalCenter',
    component: personalCenter,
    meta: {
      title: '华圣科技服务',
      keepAlive: false,
      index: 2
    }
  },

]