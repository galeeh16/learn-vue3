<template>
	<Navbar />
	<div class="wrapper">
		<div class="container pt-5">
			<h3 class="mb-5 text-center">
				Using Vee Validate for validating input
			</h3>
			<div class="row justify-content-center">
				<div class="col-lg-4 col-md-8 col-xs-12">
					<Form
						@submit="onSubmit()"
						v-slot="{ errors }"
						autocomplete="off"
						spellcheck="false"
					>
						<div class="mb-3">
							<div>
								<label>Are You Hungry?</label>
							</div>
							<div class="form-check form-check-inline">
								<Field
									class="form-check-input"
									type="radio"
									name="hungry"
									id="inlineRadio1"
									value="yes"
									rules="required"
								/>
								<label
									class="form-check-label"
									for="inlineRadio1"
									>Yes</label
								>
							</div>
							<div class="form-check form-check-inline">
								<Field
									class="form-check-input"
									type="radio"
									name="hungry"
									id="no"
									value="no"
									rules="required"
								/>
								<label class="form-check-label" for="no"
									>No</label
								>
							</div>
							<div class="text-danger">
								{{
									errors.hungry
										? "Please choose one (no hungry cyka)"
										: ""
								}}
							</div>
						</div>
						<div class="mb-3">
							<label>First Name</label>
							<Field
								name="firstName"
								class="form-control"
								type="text"
								rules="required|min:3|max:40|is_galih:ando"
								maxlength="40"
								v-model="user.firstName"
							/>
							<div class="text-danger">
								{{ errors.firstName }}
							</div>
						</div>
						<div class="mb-3">
							<label>Last Name</label>
							<Field
								name="lastName"
								class="form-control"
								type="text"
								rules="required|min:3|max:40"
								v-model="user.lastName"
							/>
							<div class="text-danger">
								{{ errors.lastName }}
							</div>
						</div>
						<div class="mb-3">
							<label>Email Adress</label>
							<Field
								name="email"
								class="form-control"
								type="text"
								rules="required|email|max:40"
								v-model="user.email"
							/>
							<div class="text-danger">{{ errors.email }}</div>
						</div>
						<div class="mb-3">
							<label>Password</label>
							<Field
								name="password"
								class="form-control"
								type="password"
								rules="required|min:3|max:12"
								v-model="user.password"
							/>
							<div class="text-danger">{{ errors.password }}</div>
						</div>
						<div class="mb-4">
							<label>Confirm Password</label>
							<Field
								name="confirmPassword"
								class="form-control"
								type="password"
								rules="required|confirmed:@password"
							/>
							<div class="text-danger">
								{{ errors.confirmPassword }}
							</div>
						</div>
						<div class="d-grid">
							<button type="submit" class="btn btn-primary">
								Submit
							</button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { Form, Field, defineRule } from "vee-validate";

defineRule("is_galih", (value) => {
	if (value.toLowerCase().includes("galih")) {
		return true;
	}

	return "This field at least has galih string";
});

export default {
	name: "Register",
	components: {
		Navbar,
		Form,
		Field,
	},
	data: () => ({
		user: {
			hungry: "",
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	}),
	methods: {
		onSubmit() {
			console.log(this.user);
		},
	},
};
</script>

<style scoped>
.text-danger {
	margin-top: 2px;
}
.text-danger::first-letter {
	text-transform: uppercase;
}
</style>
