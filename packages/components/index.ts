import { App, Plugin } from 'vue';
import * as components from './components';
export * from './components';

type AVWComponets = {
	[key: string]: Plugin;
};

export default {
	install: (app: App<any>) => {
		for (let c in components) {
			app.use((components as AVWComponets)[c]);
		}
	},
};
