/// <reference types="vite/client" />

declare module "*.vue" {
	import { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test";
		OPENAI_API_KEY: string;
	}
}
// declare global {
//   interface gptModel {
//     name: string;
//     id: string;
//   }
// }
