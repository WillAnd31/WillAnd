import Vue from 'vue'
import Router from 'vue-router'
import ResumeView from './views/ResumeView.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'resume',
			component: ResumeView
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue')
		}
	]
})
