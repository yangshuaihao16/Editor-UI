import fs from 'fs-extra';
import handlebars from 'handlebars';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pascalCase, isBase } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getDemoName = (meta) => {
	if (isBase(meta)) {
		return 'BaseDemo';
	}
	return meta.name.replace('AVW', '').replace(pascalCase(meta.folder.replace('-', ''))) + 'Demo';
};

const getTplFilePath = (meta) => ({
	// doc 目录
	doc: {
		from: '../.template/doc.md.tpl',
		to: `../../packages/components/${meta.folder}/doc/doc.md`,
	},
	demo: {
		from: '../.template/demo.vue.tpl',
		to: `../../packages/components/${meta.folder}/doc/${getDemoName(meta)}.vue`,
	},
	// 组件 目录
	vue: {
		from: '../.template/index.vue.tpl',
		to: `../../packages/components/${meta.folder}/src/${meta.imp}.vue`,
	},
	// 组件根目录
	install: {
		from: '../.template/index.ts.tpl',
		to: `../../packages/components/${meta.folder}/index.ts`,
	},
});

const componentFilesTplReplacer = (meta) => {
	const filePaths = getTplFilePath(meta);
	Object.keys(filePaths).forEach((key) => {
		const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8');
		const fileContent = handlebars.compile(fileTpl)(meta);
		fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, (err) => {
			if (err) console.log(err);
		});
	});
};

// 读取 packages/components/list.json 并更新，只有主组件才需要更新，子组件不需要注册
const listJsonTplReplacer = (meta) => {
	const listFilePath = '../../packages/components/list.json';
	const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8');
	// 写入list.json前进行备份
	fs.writeFile(resolve(__dirname, '../../packages/components/list.json.bak'), listFileTpl);
	const listFileContent = JSON.parse(listFileTpl);
	const { name, label, use, folder: group, desc: description } = meta;
	listFileContent.push({
		name,
		label,
		use,
		group,
		description,
	});
	const newListFileContentFile = JSON.stringify(listFileContent, null, 2);
	fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, (err) => {
		if (err) console.log(err);
	});
	return listFileContent;
};

// 更新 router.ts，只有主组件才需要添加路由
const routerTplReplacer = (listFileContent) => {
	const routerFileFrom = '../.template/router.ts.tpl';
	const routerFileTo = '../../src/router.ts';
	const routerBak = fs.readFileSync(resolve(__dirname, routerFileTo), 'utf-8');
	const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8');
	// 写入 router.ts 前备份
	fs.writeFile(resolve(__dirname, '../../src/router.ts.bak'), routerBak);
	const routerMeta = {
		routes: listFileContent.map((item) => {
			return `{
        title: '${item.label}',
        name: '${item.name}',
        path: '/components/${item.use}',
        component: () => import('/packages/components/${item.group}/doc/doc.md'),
      }`;
		}),
	};
	const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta);
	fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, (err) => {
		if (err) console.log(err);
	});
};

// 更新 components.ts
const componentsTsTplReplacer = (meta) => {
	const componentsFileFrom = '../.template/components.ts.tpl';
	const componentsFileTo = '../../packages/components/components.ts';
	const componentsFileTpl = fs.readFileSync(resolve(__dirname, componentsFileFrom), 'utf-8');
	const componentsFileContent = handlebars.compile(componentsFileTpl, { noEscape: true })(meta);
	// 使用追加方式写入
	fs.outputFile(resolve(__dirname, componentsFileTo), componentsFileContent, { flag: 'a' }, (err) => {
		if (err) console.log(err);
	});
};

const replacer = (meta) => {
	componentFilesTplReplacer(meta);
	const listFileContent = listJsonTplReplacer(meta);
	routerTplReplacer(listFileContent);
	componentsTsTplReplacer(meta);

	console.log(`组件新建完毕，请前往 packages/${meta.folder} 目录进行开发`);
};

export { replacer };
