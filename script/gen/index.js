import { collector } from './collector.js';
import { replacer } from './replacer.js';

async function run() {
	const meta = await collector();
	replacer(meta);
}

run();

// TODO: 目前有个问题，替换失败的时候会把原来正常的文件覆盖为空
