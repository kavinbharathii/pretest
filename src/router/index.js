import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import signIn from '../views/signIn.vue'
import signUp from '../views/signUp.vue'
import questions from '../views/questions.vue'

import iso9001 from '../components/iso9001.vue';
import iso14001 from '../components/iso14001.vue';
import iso22000 from '../components/iso22000.vue';
import iso27001 from '../components/iso27001.vue';
import iso45001 from '../components/iso45001.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '',
			component: Home,
			meta: {
				title: 'Serve To All'
			}
		},
		{
			path: '/signin',
			component: signIn,
			meta: {
				title: 'SignIn'
			}
		},
		{
			path: '/signup',
			component: signUp,
			meta: {
				title: 'SignUp'
			}
		},
		{
			path: '/questions',
			component: questions
		},
		{
			path: '/iso9001',
			component: iso9001
		},
		{
			path: '/iso14001',
			component: iso14001
		},
		{
			path: '/iso22000',
			component: iso22000
		},
		{
			path: '/iso27001',
			component: iso27001
		},
		{
			path: '/iso45001',
			component: iso45001
		}
	]
})

router.beforeEach((to, from, next) => {
	const title = to.meta.title
	if (title) {
	  document.title = title
	}
	next()
  })

export default router
