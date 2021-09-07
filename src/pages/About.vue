<template>
	<Navbar />
	<div class="wrapper">
		<div class="container pt-5 pb-100">
			<h2 class="text-center">About Apps</h2>
			<h3 class="mt-4">
				Build with Vue (Vue CLI)
				<a href="https://cli.vuejs.org/" target="_blank">
					<i class="bi-box-arrow-up-right f-18"></i>
				</a>
			</h3>
			<p class="lh-lg">
				Vue CLI aims to be the standard tooling baseline for the Vue
				ecosystem. It ensures the various build tools work smoothly
				together with sensible defaults so you can focus on writing your
				app instead of spending days wrangling with configurations. At
				the same time, it still offers the flexibility to tweak the
				config of each tool without the need for ejecting.
			</p>
			<p class="lh-lg">
				Vue (pronounced /vjuː/, like view) is a progressive framework
				for building user interfaces. Unlike other monolithic
				frameworks, Vue is designed from the ground up to be
				incrementally adoptable. The core library is focused on the view
				layer only, and is easy to pick up and integrate with other
				libraries or existing projects. On the other hand, Vue is also
				perfectly capable of powering sophisticated Single-Page
				Applications when used in combination with modern tooling and
				supporting libraries.
			</p>

			<h3 class="mt-4">
				Vue Router v4.x
				<a href="https://next.router.vuejs.org/" target="_blank">
					<i class="bi-box-arrow-up-right f-18"></i>
				</a>
			</h3>
			<p class="lh-lg mb-0 lh-lg">
				Vue Router is the official router for Vue.js. It deeply
				integrates with Vue.js core to make building Single Page
				Applications with Vue.js a breeze. Features include:
			</p>
			<ul class="ps-0 ms-3 lh-lg">
				<li>Nested routes mapping</li>
				<li>Dynamic Routing</li>
				<li>Modular, component-based router configuration</li>
				<li>Route params, query, wildcards</li>
				<li>
					View transition effects powered by Vue.js' transition system
				</li>
				<li>Fine-grained navigation control</li>
				<li>Links with automatic active CSS classes</li>
				<li>HTML5 history mode or hash mode</li>
				<li>Customizable Scroll Behavior</li>
				<li>Proper encoding for URLs</li>
			</ul>

			<h3 class="mt-4">
				Vuex v4.x
				<a href="https://next.vuex.vuejs.org/" target="_blank">
					<i class="bi-box-arrow-up-right f-18"></i>
				</a>
			</h3>
			<p class="lh-lg mb-0 lh-lg">
				Vuex is a state management pattern + library for Vue.js
				applications. It serves as a centralized store for all the
				components in an application, with rules ensuring that the state
				can only be mutated in a predictable fashion.
			</p>

			<h3 class="mt-4">
				Vee Validate v4
				<a href="https://vee-validate.logaretm.com/v4/" target="_blank">
					<i class="bi-box-arrow-up-right f-18"></i>
				</a>
			</h3>
			<p class="lh-lg mb-0 lh-lg">
				Form validation is a difficult subject in frontend, not only do
				you have to deal with ensuring correct values are submitted, but
				you also should provide a pleasant UX for your users. Doing form
				validation by hand is a lot of work and you won't probably cover
				all your needs if you decide to build your own. The time you
				spend working on a custom form validation solution is better
				spent building your application logic.
			</p>

			<h3 class="mt-4">
				Bootstrap v5.1.0
				<a href="https://getbootstrap.com/" target="_blank">
					<i class="bi-box-arrow-up-right f-18"></i>
				</a>
			</h3>
			<p class="lh-lg mb-0 lh-lg">
				Vuex is a state management pattern + library for Vue.js
				applications. It serves as a centralized store for all the
				components in an application, with rules ensuring that the state
				can only be mutated in a predictable fashion.
			</p>
		</div>
		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
	name: "About",
	components: {
		Navbar,
		Footer,
	},
};
</script>
