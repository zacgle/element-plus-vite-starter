<template>
	<div>
		<!-- 蒙层 -->

		<!-- 弹出框 -->
		<el-dialog v-model="showDialog" title="输入框" :before-close="handleClose">
			<el-form :model="form" label-width="80px" :rules="form_rules">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="form.name" autocomplete="on"></el-input>
				</el-form-item>
				<el-form-item label="API Key" prop="api">
					<el-input
						v-model="form.api"
						type="password"
						autocomplete="on"
					></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer">
				<el-button @click="handleClose">取消</el-button>
				<el-button type="primary" @click="handleSubmit">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, ref, onMounted, emit } from "vue";
	import { ElMessage, ElLoading, ElDialog } from "element-plus";
	import axios from "axios";
	import eventBus from "~/lib/eventBus";
	import gptModelReactive from "~/lib/gptModelReactive";

	interface Form {
		name: string;
		api: string;
	}
	// interface Model {
	//   id: String;
	//   name: String;
	// }

	export default defineComponent({
		name: "ChatIdentities",
		components: { ElDialog },
		emits: ["models"],
		setup(props, { emit }) {
			const form = reactive<Form>({
				name: "",
				api: "",
			});
			gptModelReactive.id = ref("123");

			const showMask = ref<boolean>(false);
			const showDialog = ref<boolean>(false);
			const userkey =
				localStorage.getItem("userKey") === null
					? ""
					: JSON.parse(localStorage.getItem("userKey")).api;
			console.log(userkey);

			var models = ref<Model[]>([]);
			if (!userkey) {
				showDialog.value = true;
				showMask.value = true;
			} else {
				let t = "sk-..." + userkey.slice(userkey.length - 10, userkey.length);
				ElMessage.success("当前使用的API Key为：" + t);
			}
			async function fetchModels() {
				axios.defaults.headers.common["Authorization"] = `Bearer ` + userkey;
				//console.info(props.models);
				try {
					const res = await axios.get("https://api.openai.com/v1/models", {
						// prompt: "Hello, world!",
						// max_tokens: 5,
					});
					models = res.data.data.map((item: any) => ({
						id: item.id,
						name: item.object,
					}));
					gptModelReactive.setModels(models);
					//console.log(state.models[0].id);
				} catch (error) {
					ElMessage.error("请求模型失败");
				}
			}

			const form_rules = {
				name: [
					{ required: true, message: "请输入姓名", trigger: "blur" },
					{
						min: 2,
						max: 10,
						message: "汉字长度不符",
						trigger: "blur",
					},
				],
				api: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{
						min: 30,
						max: 80,
						message: "长度在 6 到 20 个字符",
						trigger: "blur",
					},
				],
			};
			const formRef = ref();
			const handleSubmit = () => {
				// try {
				// 	await formRef.value.validate();
				// const loading = ElLoading.service();
				// const res = await axios.post("/api/login", form);
				// loading.close();
				localStorage.setItem("userKey", JSON.stringify(form));
				showDialog.value = false;
				showMask.value = false;
				fetchModels();
				// if (res.data.success) {
				// 	// 登录成功，隐藏对话框并保存 userkey
				// 	localStorage.setItem("userkey", res.data.userkey);
				// 	showDialog.value = false;
				// } else {
				// 	ElMessage.error(res.data.message);
				// }
				// } catch (error) {
				// /ElMessage.error(error.message || "表单验证失败");
				//}
			};

			// 在页面生成时检查 userkey，如果为空则显示对话框

			const handleClose = () => {
				//隐藏对话框;

				if (!userkey) {
					ElMessage.error("请输入一个API Key");
					return;
				}
				showDialog.value = false;
			};

			return {
				form,
				showMask,
				showDialog,
				handleSubmit,
				handleClose,
				form_rules,
			};
		},
	});
</script>

<style scoped>
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.el-dialog {
		z-index: 1000;
	}
</style>
