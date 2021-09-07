<template>
	<Navbar />
	<div class="wrapper">
		<div class="container pt-3">
			<h4>
				Corona case graph display in Indonesia
				<span style="font-size: 14px; color: #777; font-weight:normal;"
					>(Last Update: {{ today }})</span
				>
			</h4>
			<div style="max-height:600px; width: 100%;">
				<vue3-chart-js
					ref="chartRef"
					:id="barChart.id"
					:type="barChart.type"
					:data="barChart.data"
					@before-render="beforeRenderLogic"
				></vue3-chart-js>
			</div>

			<div class="" style="margin-top: 130px;">
				<h4>
					Corona case table display in Indonesia
					<span style="font-size: 14px; color: #777; font-weight:normal;"
						>(Last Update: {{ today }})</span
					>
				</h4>
				<table class="table table-hover table-striped mb-5">
					<thead>
						<tr class="text-center text-white">
							<th class="bg-primary">No</th>
							<th class="bg-primary">Province</th>
							<th class="bg-primary">Confirmed</th>
							<th class="bg-primary">Recovered</th>
							<th class="bg-primary">Deaths</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(row, idx) in tableData" :key="idx">
							<td v-if="idx < tableData.length - 1" class="text-center">
								{{ idx + 1 }}
							</td>
							<td v-if="idx < tableData.length - 1">
								{{ row.provinsi }}
							</td>
							<td class="text-end" v-if="idx < tableData.length - 1">
								{{ formatNumber(row.kasusPosi) }}
							</td>
							<td class="text-end" v-if="idx < tableData.length - 1">
								{{ formatNumber(row.kasusSemb) }}
							</td>
							<td class="text-end" v-if="idx < tableData.length - 1">
								{{ formatNumber(row.kasusMeni) }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import axios from "axios";
import { ref, computed } from "vue";

export default {
	components: {
		Navbar,
		Vue3ChartJs,
		Footer
	},
	setup() {
		const chartRef = ref(null);
		let lastUpdate = null;

		const date = new Date();

		let tableData = ref(null);

		const today = computed(function() {
			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"Juny",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			];
			return (
				date.getDate() +
				" " +
				months[date.getMonth()] +
				" " +
				date.getFullYear()
			);
		});

		const barChart = {
			id: "bar",
			type: "bar", // chart type bar
			data: {
				labels: [],
				datasets: [
					{
						label: "Confirmed",

						backgroundColor: ["#55b1f2"],
						borderRadius: 3,
						// borderColor: "rgba(153, 102, 255,1)",
						borderWidth: 1,
						data: []
					},
					{
						label: "Deaths",
						type: "line", // mixed chart type line
						backgroundColor: ["#e4517d"],
						pointRadius: 5, // utk line chart besar bubble
						data: []
					},
					{
						label: "Recovered",
						type: "bar", // mixed chart type line
						// backgroundColor: ["#cf34eb"],
						// pointRadius: 5, // utk line chart besar bubble
						backgroundColor: ["#81e39d"],
						borderRadius: 3,
						borderWidth: 1,
						data: []
					}
				]
			},
			options: {
				plugins: {
					title: {
						display: true,
						text: "Corona case in Indonesia"
					},
					subtitle: {
						display: true,
						text: "Subtitle"
					}
				},
				scales: {
					x: {
						grid: {
							display: false
						}
					}
				}
			}
		};

		const updateChart = async () => {
			const response = await axios.get(
				"https://indonesia-covid-19.mathdro.id/api/provinsi"
			);
			const dataRes = response.data.data;

			lastUpdate = response.data.lastUpdate;

			let labels = [];
			let dataArr = [];
			let dataArrDeath = [];
			let dataArrRecovered = [];

			tableData.value = dataRes;

			dataRes.map((d, idx) => {
				if (idx < dataRes.length - 17) {
					labels.push(d.provinsi);
					dataArr.push(d.kasusPosi);
					dataArrDeath.push(d.kasusMeni);
					dataArrRecovered.push(d.kasusSemb);
				}
			});

			barChart.data.labels = labels;
			barChart.data.datasets[0].data = dataArr;
			barChart.data.datasets[1].data = dataArrDeath;
			barChart.data.datasets[2].data = dataArrRecovered;

			chartRef.value.update();
		};

		updateChart();

		const beforeRenderLogic = () => {
			//...
			//if(a === b) {
			//  event.preventDefault()
			//}
		};

		const formatNumber = number => {
			return new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(number);
		};

		return {
			barChart,
			beforeRenderLogic,
			updateChart,
			chartRef,
			tableData,
			lastUpdate,
			formatNumber,
			today
		};
	}
};
</script>
