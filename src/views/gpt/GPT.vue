<template>
	<el-scrollbar
		><el-affix position="bottom"><ChatInput /></el-affix
	></el-scrollbar>
</template>

<script lang="ts">
	export default {
		name: "GPT",
	};
</script>
<script lang="ts" setup>
	import { ref } from "vue";

	const input: string = ref("");
</script>
