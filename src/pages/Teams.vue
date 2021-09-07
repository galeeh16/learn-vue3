<template>
	<Navbar />
	<div class="wrapper">
		<section class="pt-5 mb-100">
			<div class="container">
				<h2 class="text-center mb-5">Meet our team</h2>
				<div
					class="d-flex w-100 justify-content-between"
					style="gap: 2rem;"
				>
					<Team
						name="Galih Anggoro Jati"
						description="Galih Anggoro Jati is a full stack progammer who loves progamming language especially PHP and JavaScript."
						:photo="require(`@/assets/images/brendon.jpg`)"
					/>
					<Team
						name="Galiando Syarief"
						description="Galiando Syarief is an actress GGS"
						:photo="require(`@/assets/images/aliando.webp`)"
					/>
					<Team
						name="Brendon Urie"
						description="Brendon is an American singer, songwriter, and musician, best known as the lead vocalist of Panic! at the Disco, of which he is the only original member remaining."
						:photo="require(`@/assets/images/brendon.jpg`)"
					/>
					<Team
						name="Galiando Syarief"
						description="Galih Anggoro Jati is a full stack progammer who loves progamming language especially PHP and JavaScript."
						:photo="require(`@/assets/images/brendon.jpg`)"
					/>
				</div>
			</div>
		</section>

		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Team from "../components/Team.vue";
import Footer from "../components/Footer.vue";

export default {
	name: "Teams",
	components: {
		Navbar,
		Team,
		Footer,
	},
};
</script>
