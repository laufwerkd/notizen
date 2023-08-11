import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'notes',
			component: () => import('../views/NotesView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue')
		}
	]
})

export default router
