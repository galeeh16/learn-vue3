<template>
	<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white">
		<div class="container">
			<router-link class="navbar-brand" to="/"
				><span class="text-primary">Galiando</span>
			</router-link>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link" aria-current="page" to="/teams"
							>Teams</router-link
						>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/covid">
							Covid Graphic
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'multi-step-form' }">
							Multi Step Form
						</router-link>
					</li>
					<li class="nav-item" v-if="!isLogin">
						<router-link
							class="btn btn-primary px-3 py-2"
							to="/register"
							style="margin-left: 1rem;"
							>Get Started</router-link
						>
					</li>
					<li class="nav-item" v-if="!isLogin">
						<router-link
							class="btn btn-outline-primary px-3 py-2"
							to="/sign-in"
							style="margin-left: 1rem;"
							>Sign in</router-link
						>
					</li>

					<li class="nav-item dropdown pl-3" v-if="isLogin">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img
								src="@/assets/images/user.png"
								alt="User"
								class="rouded-cirlce"
								style="width: 50px; height: 50px; border-radius: 50%;"
							/>
						</a>
						<ul
							class="dropdown-menu border-0 shadow"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<li>
								<a
									class="dropdown-item"
									href="javascript:void(0);"
									@click="logout()"
									>Logout</a
								>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Navbar",
	computed: mapGetters({
		isLogin: "auth/getStatusLogin"
	}),
	methods: mapActions({
		logout: "auth/logout"
	})
};
</script>

<style scoped>
.dropdown-toggle::after {
	border-right: none;
	border-bottom: none;
	border-left: none;
}
</style>
