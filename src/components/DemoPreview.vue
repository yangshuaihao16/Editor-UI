<template>
	<div class="code-preview">
		<section>
			<slot></slot>
		</section>

		<div v-show="show" class="source-code">
			<pre class="language-html"><code class="language-html">{{ previewCode }}</code></pre>
		</div>

		<div class="preview-bottom">
			<span @click="show = !show">
				{{ show ? '隐藏代码' : '查看代码' }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
// import "../assets/style/prism.css";
import 'prism-themes/themes/prism-one-dark.css';
import { ref, onMounted, computed, nextTick } from 'vue';

defineOptions({
	name: 'DemoPreview',
});

const isDev = import.meta.env.MODE === 'development';

const props = defineProps({
	/** 组件目录 */
	folder: {
		type: String,
		default: '',
		require: true,
	},
	// 文件名
	file: {
		type: String,
		default: '',
		require: true,
	},
});

let sourceCode = ref('');

let show = ref(false);

const previewCode = computed(() => {
	return sourceCode.value;
});

onMounted(async () => {
	if (props.folder) {
		if (isDev) {
			sourceCode.value = (
				await import(/* @vite-ignore */ `../../packages/components/${props.folder}/doc/${props.file}.vue?raw`)
			).default;
		} else {
			sourceCode.value = await fetch(
				`${isDev ? '' : '/Editor-UI'}/packages/components/${props.folder}/doc/${props.file}.vue`
			).then((res) => res.text());
		}
	}

	nextTick(() => {
		Prism.highlightAll();
	});
});
</script>

<style lang="scss" scoped>
pre {
	line-height: 0;
}
.code-preview {
	border: 4px;
	border: 1px dashed #5e5e5e;
	padding: 10px 10px 0;
	border-bottom: 1px dashed #5e5e5e;
	section {
		margin: 15px;
	}
}

.source-code {
	max-height: 500px;
	overflow: auto;
}
.language-html {
	margin: 0;
	padding: 5px 15px;
}
.preview-bottom {
	height: 30px;
	font-size: 14px;
	margin-top: 10px;
	padding: 0 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-top: 1px dashed #5e5e5e;

	span {
		cursor: pointer;

		&:hover {
			color: #2d98f0;
		}
	}
}
</style>
