<template>
	<div class="components-row">
		<avw-button size="large" round @click="onClick('large')">large</avw-button>
		<avw-button round @click="onClick('default')">default</avw-button>
		<avw-button size="small" round @click="onClick('small')">small</avw-button>
		<br />
		<br />
		<avw-button size="large" @click="onClick('large')">large</avw-button>
		<avw-button @click="onClick('default')">default</avw-button>
		<avw-button size="small" @click="onClick('small')">small</avw-button>
		<br />
		<br />
		<avw-button size="large" circle icon="avw-listtool-edit" @click="onClick('primary-circle')"></avw-button>
		<avw-button circle icon="avw-listtool-delete" @click="onClick('default')"></avw-button>
		<avw-button size="small" circle icon="avw-experimental" @click="onClick('warning-circle')"></avw-button>
	</div>
</template>

<script setup lang="ts">
const onClick = (str: string) => {
	console.log(`我是 ${str} 自定义按钮`);
};
</script>
