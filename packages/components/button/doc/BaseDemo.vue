<template>
	<div class="components-row">
		<avw-button @click="onClick(1)">第一个</avw-button>
		<avw-button @click="onClick(2)">第二个</avw-button>
		<avw-button @click="onClick(3)">第三个</avw-button>
	</div>
</template>

<script setup lang="ts">
const onClick = (num: Number) => {
	console.log(`我是第 ${num} 个自定义按钮`);
};
</script>
