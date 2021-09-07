<template>
	<div class="card border-0 shadow rounded-3" style="width: 18rem;">
		<img
			:src="photo"
			class="card-img-top"
			alt="Photo"
			style="width: 100%; max-height: 230px; height: auto; object-fit:cover;"
		/>
		<div class="card-body">
			<h5 class="f-20 fw-600 mb-3">{{ name }}</h5>
			<div class="card-text text-muted">{{ description }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Team",
	props: {
		name: {
			type: String,
			required: true,
		},
		photo: {
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
};
</script>
