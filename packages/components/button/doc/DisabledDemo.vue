<template>
	<div class="components-row">
		<avw-button disabled type="default" @click="onClick('default')">default</avw-button>
		<avw-button disabled type="primary" @click="onClick('primary')">primary</avw-button>
		<avw-button disabled type="success" @click="onClick('success')">success</avw-button>
		<avw-button disabled type="info" @click="onClick('info')">info</avw-button>
		<avw-button disabled type="warning" @click="onClick('warning')">warning</avw-button>
		<avw-button disabled type="danger" @click="onClick('danger')">danger</avw-button>
	</div>
	<div class="components-row">
		<avw-button disabled plain type="default" @click="onClick('default-plain')">default</avw-button>
		<avw-button disabled plain type="primary" @click="onClick('primary-plain')">primary</avw-button>
		<avw-button disabled plain type="success" @click="onClick('success-plain')">success</avw-button>
		<avw-button disabled round type="info" @click="onClick('info-round')">info</avw-button>
		<avw-button disabled round type="warning" @click="onClick('warning-round')">warning</avw-button>
		<avw-button disabled round type="danger" @click="onClick('danger-round')">danger</avw-button>
	</div>
</template>

<script setup lang="ts">
const onClick = (str: string) => {
	console.log(`我是 ${str} 自定义按钮`);
};
</script>
