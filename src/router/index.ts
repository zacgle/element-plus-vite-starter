import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BaseSideVue from "~/components/layouts/BaseSide.vue";
import GPT from "~/views//gpt/GPT.vue";
import ChatInputVue from "~/components/chats/ChatInput.vue";
import NotFound from "~/views/404.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/demos/",
		name: "GPT",
		component: BaseSideVue,
		meta: {
			title: "功能演示",
		},
		children: [
			{
				path: "gpt",
				name: "GPT演示",
				component: GPT,
				meta: {
					title: "GPT演示",
				},
			},
		],
	},
	{
		path: "/",
		redirect: "/demos/gpt",
		meta: {
			title: "首页",
		},
	},
	{
		path: "/:pathMatch(.*)*",
		component: NotFound,
		meta: {
			title: "页面没有找到",
		},
	},
	{
		path: "/look",
		name: "Look",
		component: ChatInputVue,
		meta: {
			title: "临时查看效果",
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title as string;
	next();
});
export default router;
