<template>
	<div class="container">
		<div class="d-flex w-100 justify-content-between flex-wrap gap-1rem">
			<div class="shadow-lg p-0 position-relative bg-white pricing">
				<div class="d-flex justify-content-center text-white">
					<div
						class="d-inline-block bg-primary px-5 py-2"
						style="border-bottom-left-radius: 14px; border-bottom-right-radius: 14px;"
					>
						<span class="f-20">Free</span>
					</div>
				</div>
				<div class="p-5">
					<h1 class="fw-500 text-dark">
						$0<span class="f-18">/month</span>
					</h1>

					<ul class="pricing-list">
						<li>Max 5 Skin</li>
						<li>Up to 5 user</li>
						<li>Limited Space</li>
						<li>Limited Player</li>
					</ul>

					<div class="text-center mt-5">
						<router-link
							to="/order"
							class="btn btn-outline-pink px-5 py-2 f-18"
							>Order Now</router-link
						>
					</div>
				</div>
			</div>

			<div class="shadow-lg p-0 position-relative bg-white pricing">
				<div class="d-flex justify-content-center text-white">
					<div
						class="d-inline-block bg-primary px-5 py-2"
						style="border-bottom-left-radius: 14px; border-bottom-right-radius: 14px;"
					>
						<span class="f-20">Professional</span>
					</div>
				</div>
				<div class="p-5">
					<h1 class="fw-500 text-dark">
						$30<span class="f-18">/month</span>
					</h1>
					<ul class="pricing-list">
						<li>Max 50 Skin</li>
						<li>Up to 300 user</li>
						<li>Free 50GB Space</li>
						<li>Limited 300 Player</li>
						<li>Unlimited Support</li>
						<li>Limited Giveaway</li>
					</ul>

					<div class="text-center mt-5">
						<router-link
							to="/order"
							class="btn btn-outline-pink px-5 py-2 f-18"
							>Order Now</router-link
						>
					</div>
				</div>
			</div>

			<div class="shadow-lg p-0 position-relative bg-white pricing">
				<div class="d-flex justify-content-center text-white">
					<div
						class="d-inline-block bg-primary px-5 py-2"
						style="border-bottom-left-radius: 14px; border-bottom-right-radius: 14px;"
					>
						<span class="f-20">Business</span>
					</div>
				</div>
				<div class="p-5">
					<h1 class="fw-500 text-dark">
						$80<span class="f-18">/month</span>
					</h1>

					<ul class="pricing-list">
						<li>Unlimited Skin</li>
						<li>Unlimited user</li>
						<li>Free 1TB Space</li>
						<li>Unimited 300 Player</li>
						<li>Support Forever</li>
						<li>Unlimited Giveaway</li>
						<li>Playing with other players</li>
						<li>Unlimited game support</li>
					</ul>

					<div class="text-center mt-5">
						<router-link
							to="/order"
							class="btn btn-outline-pink px-5 py-2 f-18"
							>Order Now</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Pricing",
};
</script>

<style scoped>
.gap-1rem {
	gap: 1rem;
}
.pricing {
	flex: 1;
	max-width: 25rem;
	/* border-radius: 10px; */
}
.f-20 {
	text-transform: uppercase;
	letter-spacing: 2px;
}
.pricing-list {
	list-style: none;
	vertical-align: top;
	padding-left: 4px;
	font-size: 18px;
	margin-top: 2rem;
}
.pricing-list li {
	background: url(https://d2xry04qzt18o6.cloudfront.net/assets/tasks/glyphs/check-36fec6d85622d293ddfd505dbe9842520acc4177ebf6dc163676582f3e3a52be.svg)
		no-repeat left center;
	margin-left: 0;
	padding-left: 2rem;
	margin-bottom: 1rem;
}
</style>
