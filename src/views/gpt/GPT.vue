<template>
	<el-scrollbar>
		<ChatInput />
		<h1>123</h1></el-scrollbar
	>
</template>

<script lang="ts">
	import { defineComponent, ref, watch } from "vue";
	import axios from "axios";
	export default {
		name: "GPT",
		setup() {
			// const input = ref("");
			// function send() {
			// 	// /console.log(input.value);
			// 	axios
			// 		.get("https://api.openai.com/v1/models", {
			// 			// prompt: "Hello, world!",
			// 			// max_tokens: 5,
			// 		})
			// 		.then((response) => {
			// 			res = response.data.data;
			// 			console.log(res);
			// 		})
			// 		.catch((error) => {
			// 			console.log(error);
			// 		});
			// }
			// const response = ref("123");
			// var res = ref([]);
			// axios.defaults.headers.common[
			// 	"Authorization"
			// ] = `Bearer ${process.env.OPENAI_API_KEY}`;
			// console.log(process.env.OPENAI_API_KEY);
			// axios
			// 	.get("https://api.openai.com/v1/models", {
			// 		// prompt: "Hello, world!",
			// 		// max_tokens: 5,
			// 	})
			// 	.then((response) => {
			// 		res = ref(response.data.data);
			// 		console.log(res);
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});
			// watch(
			// 	res,
			// 	(newArray, oldArray) => {
			// 		console.log("res改变");
			// 	},
			// 	{ deep: true }
			// );
			// return {
			// 	input,
			// 	//send,
			// 	response,
			// 	res,
			// };
		},
	};
</script>
