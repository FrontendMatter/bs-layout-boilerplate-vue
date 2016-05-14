import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
	linkActiveClass: 'active',
	history: true
})

router.map({
	'/': {
		name: 'home',
		component: function (resolve) {
			require(['./pages/home'], resolve)
		}
	},
	'/sidebar': {
		name: 'sidebar',
		component: function (resolve) {
			require(['./pages/sidebar'], resolve)
		}
	}
})

router.beforeEach(function () {
	window.scrollTo(0, 0)
})

router.redirect({
	'*': '/'
})

export default router