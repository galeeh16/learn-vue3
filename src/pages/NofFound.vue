<template>
	<h4 class="text-center mt-5 pt-5">Not found :(</h4>

	<div class="d-flex justify-content-center mt-5">
		<router-link
			to="/"
			class="btn btn-pink d-flex justify-content-center align-items-center"
			style="width: 180px"
		>
			<i class="bi-arrow-left-short f-22"></i> Back to home
		</router-link>
	</div>
</template>

<script>
export default {
	name: "NotFound",
};
</script>
