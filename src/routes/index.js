import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: () =>
				import(/* webpackChunkName: "group-user" */ "@/pages/Home"),
			meta: {
				title: "Galiando - Home"
			}
		},
		{
			path: "/sign-in",
			name: "sign-in",
			component: () => import("@/pages/SignIn"),
			meta: {
				title: "Galiando - Sign in"
			}
		},
		{
			path: "/register",
			name: "register",
			component: () => import("@/pages/Register"),
			meta: {
				title: "Galiando - Register"
			}
		},
		{
			path: "/teams",
			name: "teams",
			component: () => import("@/pages/Teams"),
			meta: {
				title: "Galiando - Teams"
			}
		},
		{
			path: "/about",
			name: "about",
			component: () => import("@/pages/About"),
			meta: {
				title: "Galiando - About Us"
			}
		},
		{
			path: "/covid",
			name: "covid",
			component: () => import("@/pages/Covid"),
			meta: {
				title: "Galiando - Covid Graphic"
			}
		},
		{
			path: "/multi-step-form",
			name: "multi-step-form",
			component: () => import("@/pages/MultiStepForm"),
			meta: {
				title: "Galiando - Multi Step Form"
			}
		},
		// will match everything and put it under `$route.params.pathMatch`
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: () => import("@/pages/NofFound"),
			meta: { title: "Page not found" }
		}
	]
});

router.beforeEach((to, from, next) => {
	if (to.params.title) {
		document.title = to.params.title;
	} else {
		document.title = to.meta.title || "Galiando App";
	}
	next();
});

export default router;
