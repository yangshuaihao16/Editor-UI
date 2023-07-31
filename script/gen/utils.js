// FooBar --> foo-bar
export const kebabCase = (string) =>
	string
		.replace('AVW', 'Avw')
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();

// foo-bar --> FooBar
export const pascalCase = (str) => {
	//把每个-与后面的第一个字母匹配出来，利用replace转成大写
	const reg = /-\w/g;
	return str.replace(reg, (value) => value[1].toUpperCase());
};

export const isBase = (meta) => {
	return meta.folder.replace('-', '') == meta.name.replace('AVW', '').toLowerCase();
};
