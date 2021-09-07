<template>
	<Navbar />
	<div class="wrapper">
		<div class="container pt-4">
			<div class="row justify-content-center">
				<div class="col-lg-5 col-md-8 col-xs-12">
					<div class="steps">
						<div class="step" :class="{ active: currentStep == 1 }">
							1
						</div>
						<div class="step" :class="{ active: currentStep == 2 }">
							2
						</div>
						<div class="step" :class="{ active: currentStep == 3 }">
							3
						</div>
					</div>

					<Form
						@submit="onSubmit()"
						v-slot="{ errors }"
						autocomplete="off"
						spellcheck="false"
					>
						<!-- STEP 1  -->
						<section class="form" :class="{ active: currentStep == 1 }">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Your Profile</h4>
								</div>
								<div class="card-body">
									<div class="mb-3">
										<label class="form-label">Email</label>
										<Field type="text" class="form-control" name="email" />
										<div class="text-danger">
											{{ errors.email }}
										</div>
									</div>
									<div class="mb-3">
										<label class="form-label">Name</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Password</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Confirm Password</label>
										<input type="text" class="form-control" />
									</div>
								</div>
							</div>
						</section>

						<!-- STEP 2  -->
						<section class="form" :class="{ active: currentStep == 2 }">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Your Shipping</h4>
								</div>
								<div class="card-body">
									<div class="mb-3">
										<label class="form-label">Address</label>
										<input type="text" class="form-control" />
									</div>
									<div class="mb-3">
										<label class="form-label">Postal Code</label>
										<input type="text" class="form-control" />
									</div>
								</div>
							</div>
						</section>

						<!-- STEP 3  -->
						<section class="form" :class="{ active: currentStep == 3 }">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Accept Terms</h4>
								</div>
								<div class="card-body">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value="true"
											id="flexCheckDefault"
										/>
										<label class="form-check-label" for="flexCheckDefault">
											Accept terms & condition
										</label>
									</div>
								</div>
							</div>
						</section>

						<div class="d-flex justify-content-end mt-3">
							<button
								type="button"
								class="btn btn-pink me-3"
								@click.prevent="prevCurrentStep"
								v-if="currentStep > 1"
							>
								<i class="bi-chevron-left"></i> Prev
							</button>
							<button
								type="button"
								class="btn btn-primary"
								@click.prevent="nextCurrentStep"
								v-if="currentStep < totalStep"
								style="justify-self: end;"
							>
								Next
								<i class="bi-chevron-right"></i>
							</button>

							<button
								type="button"
								class="btn btn-primary"
								@click.prevent="handleSubmit"
								v-if="currentStep == totalStep"
							>
								Submit
								<i class="bi-plane"></i>
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
import { Form, Field } from "vee-validate";

export default {
	name: "MultiStepForm",
	components: {
		Navbar,
		Form,
		Field
	},
	data: () => ({
		totalStep: 3,
		currentStep: 1
	}),
	methods: {
		prevCurrentStep() {
			if (this.currentStep > 0) {
				this.currentStep--;
			}
		},
		nextCurrentStep() {
			if (this.currentStep != this.totalStep) {
				this.currentStep++;
			}
		}
	}
};
</script>

<style scoped>
.steps {
	display: flex;
	box-sizing: border-box;
	justify-content: space-between;
	margin-bottom: 1.2rem;
}
.steps .step {
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border-radius: 50%;
	display: inline-block;
	background-color: #eee;
	font-size: 18px;
	font-weight: 500;
	color: #adb8b9;
}
.steps .step.active {
	color: #08ba98;
	background-color: #f1fffd;
	border: 2px solid #08ba98;
}

section.form {
	display: none;
}
section.form.active {
	display: block;
}
</style>
