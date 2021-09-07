import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/assets/style.css";

// Vee validate
import { defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";

Object.keys(AllRules).forEach((rule) => {
	defineRule(rule, AllRules[rule]);
});

configure({
	validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
	validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
	validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
	validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler

	// Generates an English message locale generator
	generateMessage: localize("en", {
		messages: {
			_default: ({ field }) => `The ${field} value is not valid`,
			alpha: ({ field }) =>
				`The ${field} field may only contain alphabetic characters`,
			alpha_dash: ({ field }) =>
				`The ${field} field may contain alpha-numeric characters as well as dashes and underscores`,
			alpha_num: ({ field }) =>
				`The ${field} field may only contain alpha-numeric characters`,
			alpha_spaces: ({ field }) =>
				`The ${field} field may only contain alphabetic characters as well as spaces`,
			between: ({ field, rule }) =>
				`The ${field} field must be between ${rule.params[0]} and ${rule.params[1]}`,
			confirmed: ({ field }) =>
				`The ${field} confirmation does not match`,
			digits: (field, rule) =>
				`The ${field} field must be numeric and contains exactly ${rule.params[0]} digits`,
			dimensions: (field, [width, height]) =>
				`The ${field} field must be ${width} pixels by ${height} pixels`,
			email: ({ field }) => `The ${field} field must be a valid email`,
			excluded: ({ field }) => `The ${field} field must be a valid value`,
			ext: ({ field }) => `The ${field} field must be a valid file`,
			image: ({ field }) => `The ${field} field must be an image`,
			integer: ({ field }) => `The ${field} field must be an integer`,
			// length: (field, [length, max]) => {
			// 	if (max) {
			// 		return `The ${field} length must be between ${length} and ${max}`;
			// 	}

			// 	return `The ${field} length must be ${length}`;
			// },
			max: ({ field, rule }) =>
				`The ${field} field may not be greater than ${rule.params[0]} characters`,
			max_value: ({ field, rule }) =>
				`The ${field} field must be ${rule.params[0]} or less`,
			mimes: ({ field }) =>
				`The ${field} field must have a valid file type`,
			min: ({ field, rule }) =>
				`The ${field} field must be at least ${rule.params[0]} characters`,
			min_value: (field, [min]) =>
				`The ${field} field must be ${min} or more`,
			numeric: ({ field }) =>
				`The ${field} field may only contain numeric characters`,
			regex: ({ field }) => `The ${field} field format is invalid`,
			// required: ({ field }) => `The ${field} field is required`,
			required: () => `The field is required`,
			required_if: ({ field, rule }) =>
				`The ${field} field is required when the ${rule.params[0]} field has this value`,
			// size: (field, [size]) => `The ${field} size must be less than ${formatFileSize(size)}`,
			url: ({ field }) => `The ${field} field is not a valid URL`,
		},
	}),
});

setLocale("en");

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
