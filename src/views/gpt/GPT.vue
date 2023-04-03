<template>
	<ChatIdentities />
	<el-scrollbar>
		<ChatInput />
	</el-scrollbar>
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue";
	import axios from "axios";

	export default defineComponent({
		name: "GPT",
	});
</script>
