
const Promise = () => import(/* webpackChunkName:'Promise' */'@/study/Promise/Promise.vue')
const Map = () => import(/* webpackChunkName:'Map' */'@/study/Map/Map.vue')
const Set = () => import(/* webpackChunkName:'Set' */'@/study/Set/Set.vue')
const TaskSlice = () => import(/* webpackChunkName:'TaskSlice' */'@/study/TaskSlice/TaskSlice.vue')

const routes = [
  { path: '/', name: 'Promise', component: Promise, meta: { title: 'Promise' } },
  { path: '/Promise', name: 'Promise', component: Promise, meta: { title: 'Promise' } },
  { path: '/Map', name: 'Map', component: Map, meta: { title: 'Map' } },
  { path: '/Set', name: 'Set', component: Set, meta: { title: 'Set' } },
  { path: '/TaskSlice', name: 'TaskSlice', component: TaskSlice, meta: { title: 'TaskSlice' } },
] 


export default routes