interface GptModelReactive {
	models: gptModel[];
	setModels: (models: gptModel[]) => void;
}

import { reactive, toRefs } from "vue";

const gptModelReactive: GptModelReactive = reactive({
	models: [],
	setModels(inputs: gptModel[]) {
		this.models = inputs;
	},
});

export default toRefs(gptModelReactive);
