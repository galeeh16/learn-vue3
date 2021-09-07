<template>
	<Navbar />
	<div class="wrapper">
		<div class="hero">
			<div class="container">
				<div class="d-flex align-items-center">
					<div class="w-50 pr-5">
						<h1 class="fw-600">
							Reach new levels of
							<span class="text-primary">productivity</span>
						</h1>
						<h5 class="mt-5 f-22 text-gray-700">
							Just finish your work, let's play some game with me
						</h5>
						<router-link to="/register" class="btn btn-pink px-5 py-3 f-20 mt-5"
							>Get Started</router-link
						>
					</div>
					<div class="flex-1 w-50 img-banner">
						<img src="@/assets/images/banner.png" alt="Banner" class="w-100" />
					</div>
				</div>
			</div>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
			<path
				fill="#f6fcfb"
				fill-opacity="1"
				d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,117.3C840,85,960,43,1080,48C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
			></path>
		</svg>

		<section class="pt-100">
			<h2 class="text-center mb-5">Pricing</h2>
			<Pricing />
		</section>

		<section class="pt-100 pb-100">
			<div class="container">
				<h2 class="text-center mb-5">Who's using Galiando</h2>
				<div
					class="d-flex align-items-center justify-content-center"
					style="gap: 3.4rem"
				>
					<Netflix />
					<Docker />
					<Tencent />
					<Starbucks />
					<Twitch />
					<Sesame />
					<Binance />
				</div>
			</div>
		</section>

		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Tencent from "../components/sponsor/Tencent.vue";
import Netflix from "../components/sponsor/Netflix.vue";
import Docker from "../components/sponsor/Docker.vue";
import Starbucks from "../components/sponsor/Starbucks.vue";
import Twitch from "../components/sponsor/Twitch.vue";
import Sesame from "../components/sponsor/Sesame.vue";
import Binance from "../components/sponsor/Binance.vue";
import Pricing from "../components/Pricing.vue";

export default {
	name: "Home",
	components: {
		Navbar,
		Footer,
		Tencent,
		Netflix,
		Docker,
		Starbucks,
		Twitch,
		Sesame,
		Binance,
		Pricing
	}
};
</script>
