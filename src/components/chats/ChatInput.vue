<template>
	<div style="position: relative">
		<el-form class="form" :inline="true">
			<el-row>
				<el-col :span="5"></el-col>
				<el-col :span="13"
					><el-input
						v-model="input"
						:placeholder="response"
						clearable
					></el-input
				></el-col>
				<el-col :span="1"></el-col>
				<el-col :span="2">
					<div class="flex flex-wrap items-center">
						<el-dropdown
							><el-button type="primary"
								>模型选择<el-icon class="el-icon--right"
									><ArrowDownBold /></el-icon
							></el-button>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item>Action 1</el-dropdown-item>
									<el-dropdown-item>Action 2</el-dropdown-item>
									<el-dropdown-item>Action 3</el-dropdown-item>
									<el-dropdown-item>Action 4</el-dropdown-item>
									<el-dropdown-item>Action 5</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div></el-col
				>
				<el-col :span="1" />
				<el-col :span="1"
					><el-button type="primary" @click="send"> Send </el-button></el-col
				>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted } from "vue";
	import { ArrowDown, ArrowDownBold } from "@element-plus/icons-vue";
	// import { Configuration, OpenAIApi } from "openai";
	export default defineComponent({
		//name: 'ChatInput',
		setup() {
			const input = ref("");
			const send = () => {
				console.log(input.value);
			};
			const response = ref("123");
			// const configuration = new Configuration({
			//     organizaiton: "org-OrzR5c4xBgjxGoVHQOIIH3aM",
			//     apiKey: process.env.sk - 3,
			//     kNePFw5VZx0RtmSIMJcT3BlbkFJbRmXloqLldYq93N5z8g7,
			// });
			// const openai = new OpenAIApi(configuration);
			// const response = await openai.listEngines();
			return {
				input,
				send,
				response,
			};
		},
		components: { ArrowDownBold },
	});
</script>
<style scoped>
	.example-showcase .el-dropdown + .el-dropdown {
		margin-left: 15px;
	}
	.example-showcase .el-dropdown-link {
		cursor: pointer;
		color: var(--el-color-primary);
		display: flex;
		align-items: center;
	}
	.form {
		position: fixed;
		bottom: 10px;
		left: 0;
		width: 100%;
		/* transform: translateX(5%); */
		z-index: 1000;
	}
</style>
