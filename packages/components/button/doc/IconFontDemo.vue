<template>
	<div class="components-row">
		<avw-button icon="avw-experimental" type="info" @click="onClick('info')"></avw-button>
		<avw-button icon="avw-2dview" type="warning" @click="onClick('warning')"></avw-button>
		<avw-button icon="avw-environment" type="success" @click="onClick('success')"></avw-button>
		<avw-button icon="avw-listtool-delete" type="primary" @click="onClick('primary')">编辑</avw-button>
		<avw-button type="danger">删除<i class="icon iconfont avw-listtool-edit"></i></avw-button>
	</div>
</template>

<script setup lang="ts">
const onClick = (str: string) => {
	console.log(`我是 ${str} 自定义按钮`);
};
</script>
