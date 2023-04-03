<template>
	<div style="position: relative">
		<el-form class="form" :inline="true">
			<el-row :gutter="20">
				<el-col :span="5"></el-col>
				<el-col :span="13"
					><el-input
						v-model="input"
						:placeholder="response"
						clearable
					></el-input
				></el-col>
				<!-- <el-col :span="1"></el-col> -->
				<el-col :span="3">
					<div class="flex flex-wrap items-center">
						<el-dropdown popper-class="dropdown-up" append-to-body
							><el-button type="primary"
								>{{ selectedModelID
								}}<el-icon class="el-icon--right"><ArrowDownBold /></el-icon
							></el-button>
							<template #dropdown>
								<el-dropdown-menu style="max-height: 200px; overflow-y: auto">
									<el-dropdown-item v-if="models.length === 0" disabled>
										没有可用的模型
									</el-dropdown-item>
									<el-dropdown-item
										v-for="(model, index) in allModels"
										:key="index"
										@click="onModelSelected(model)"
										>{{ model.id }}</el-dropdown-item
									>
									<el-scrollbar v-if="models.length > 10"></el-scrollbar>
									<!-- <el-dropdown-item>Action 2</el-dropdown-item>
									<el-dropdown-item>Action 3</el-dropdown-item>
									<el-dropdown-item>Action 4</el-dropdown-item>
									<el-dropdown-item>Action 5</el-dropdown-item> -->
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div></el-col
				>
				<!-- <el-col :span="1" /> -->
				<el-col :span="1"
					><el-button type="primary" @click="send"> Send </el-button></el-col
				>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts">
	import {
		defineComponent,
		ref,
		onMounted,
		reactive,
		toRefs,
		computed,
	} from "vue";
	import { ArrowDown, ArrowDownBold } from "@element-plus/icons-vue";
	import axios from "axios";
	import { ElMessage } from "element-plus";

	interface Model {
		id: String;
		name: String;
	}
	export default defineComponent({
		//name: 'ChatInput',
		setup() {
			const input = ref("");
			const send = () => {
				console.log(input.value);
			};

			const response = ref("123");
			const state = reactive({
				models: [] as Model[],
				selectedModelID: "请选择模型",
			});
			async function fetchModels() {
				axios.defaults.headers.common[
					"Authorization"
				] = `Bearer ${process.env.OPENAI_API_KEY}`;
				//console.info(props.models);
				try {
					const res = await axios.get("https://api.openai.com/v1/models", {
						// prompt: "Hello, world!",
						// max_tokens: 5,
					});
					state.models = res.data.data.map((item: any) => ({
						id: item.id,
						name: item.object,
					}));
					//console.log(state.models[0].id);
				} catch (error) {
					ElMessage.error("请求模型失败");
				}
			}
			const onModelSelected = (model: Model) => {
				state.selectedModelID = model.id;
			};
			const allModels = computed(() => {
				if (state.models.length > 10) {
					return state.models;
				} else {
					return state.models.slice(0, 10);
				}
			});
			onMounted(() => {
				fetchModels();
			});

			// axios
			// 	.get("https://api.openai.com/v1/models", {
			// 		// prompt: "Hello, world!",
			// 		// max_tokens: 5,
			// 	})
			// 	.then((response) => {
			// 		res = response.data.data;
			// 		console.log(typeof menuOptions);
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 	});
			return {
				input,
				send,
				...toRefs(state),
				response,
				allModels,
				onModelSelected,
			};
		},
		components: { ArrowDownBold },
		// props: {
		// 	models: {
		// 		type: Array,
		// 		//default: () => [],
		// 		required: true,
		// 		array: true,
		// 	},
		// },
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
		display: inline-block;
		padding-right: 20px;
	}
	.dropdown-up[x-placement^="top"] .el-dropdown-menu {
		bottom: 100%;
		margin-bottom: 0;
		margin-top: -8px;
	}
</style>
