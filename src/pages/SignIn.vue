<template>
	<main>
		<div class="d-flex w-100">
			<div
				class="kiri w-50 d-flex flex-column justify-content-center align-items-center"
			>
				<router-link class="brand mb-4" to="/"
					><span class="text-primary">Galiando</span></router-link
				>
				<h3 class="text-center mb-5 text-dark fw-300">
					Sign in to your account.
				</h3>

				<form
					@submit.prevent="handleSubmit"
					spellcheck="false"
					autocomplete="off"
				>
					<div
						class="alert alert-danger mb-3 d-flex"
						role="alert"
						v-if="failedLogin"
						v-html="errorLogin"
					></div>

					<div class="mb-4">
						<input
							type="text"
							class="form-control rounded-pill"
							placeholder="myemail@email.com"
							v-model.trim="email"
							maxlength="30"
						/>
					</div>
					<div class="mb-4 position-relative">
						<input
							:type="typePassword"
							class="form-control rounded-pill"
							placeholder="password12345!"
							v-model.trim="password"
							maxlength="20"
						/>
						<i
							:class="iconPassword"
							class="icon-pwd position-absolute"
							@click="changeTypePassword"
						></i>
					</div>
					<div class="form-check mb-4">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="defaultCheck1"
							v-model="remember_me"
						/>
						<label class="form-check-label" for="defaultCheck1">
							Remember me
						</label>
					</div>
					<div class="d-grid">
						<button type="submit" class="btn btn-primary rounded-pill">
							Sign in
						</button>
					</div>
				</form>
			</div>
			<div class="kanan w-50">
				<img
					src="@/assets/images/login.png"
					alt="Login"
					class="w-100 h-auto img-login-banner"
				/>
			</div>
		</div>
	</main>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "SignIn",
	data: () => ({
		typePassword: "password",
		iconPassword: "bi-eye-slash",
		email: "",
		password: "",
		remember_me: false,
		validEmail: "myemail@email.com",
		validPassword: "password12345!",
		errorLogin: "",
		failedLogin: false
	}),
	methods: {
		...mapActions({
			login: "auth/setIsLogin"
		}),
		changeTypePassword() {
			if (this.typePassword === "password") {
				this.typePassword = "text";
				this.iconPassword = "bi-eye";
			} else {
				this.typePassword = "password";
				this.iconPassword = "bi-eye-slash";
			}
		},
		handleSubmit() {
			if (
				this.email == this.validEmail &&
				this.password == this.validPassword
			) {
				this.failedLogin = false;
				this.errorLogin = "";
				localStorage.setItem("galiando-auth", true);

				// vuex actions dispatch
				this.login(true);

				this.$router.push({ name: "home" });
				console.log("success");
			} else {
				this.failedLogin = true;
				localStorage.removeItem("galiando-auth", true);
				this.errorLogin = `
					<div>
						<i class='bi-exclamation-triangle f-28'></i>
					</div>
					<div style="margin-left: 16px;">
					Email or Password are invalid, please use <span class='fw-600'>myemail@email.com</span> and <span class='fw-600'>password12345!</span> for login.
					</div>`;
				console.log("failed");
			}
		}
	}
};
</script>

<style scoped>
.kiri {
	background-color: #f6fcfb;
}
.kanan {
	min-height: 100vh;
	background-color: #07a387;
}
form {
	width: 430px;
	max-width: 430px;
}
.form-control {
	border: 1px solid #e1e6eb;
}
.form-control,
.btn {
	padding: 0.8rem 2rem;
}
.form-check-input {
	width: 1.2rem;
	height: 1.2rem;
	margin-top: 0.1rem;
}
.icon-pwd.position-absolute {
	right: 22px;
	top: 14px;
	color: #bbc4cf;
	cursor: pointer;
}
.alert {
	font-size: 14px;
}
</style>
