<template>
	<div class="components-row">
		<avw-button hover-type="primary" type="default" @click="onClick('default')">default</avw-button>
		<avw-button hover-type="primary" type="primary" @click="onClick('primary')">primary</avw-button>
		<avw-button hover-type="primary" type="success" @click="onClick('success')">success</avw-button>
		<avw-button hover-type="primary" type="info" @click="onClick('info-plain')">info</avw-button>
		<avw-button hover-type="primary" plain type="warning" @click="onClick('warning-plain')">warning</avw-button>
		<avw-button hover-type="primary" plain type="danger" @click="onClick('danger-plain')">danger</avw-button>
	</div>
	<div class="components-row">
		<avw-button hover-type="danger" type="default" @click="onClick('default')">default</avw-button>
		<avw-button hover-type="danger" type="primary" @click="onClick('primary')">primary</avw-button>
		<avw-button hover-type="danger" type="success" @click="onClick('success')">success</avw-button>
		<avw-button hover-type="danger" plain type="info" @click="onClick('info-plain')">info</avw-button>
		<avw-button hover-type="danger" plain type="warning" @click="onClick('warning-plain')">warning</avw-button>
		<avw-button hover-type="danger" plain type="danger" @click="onClick('danger-plain')">danger</avw-button>
	</div>
	<div class="components-row">
		<avw-button hover-type="warning" type="default" @click="onClick('default')">default</avw-button>
		<avw-button hover-type="warning" type="primary" @click="onClick('primary')">primary</avw-button>
		<avw-button hover-type="warning" type="success" @click="onClick('success')">success</avw-button>
		<avw-button hover-type="warning" type="info" @click="onClick('info-plain')">info</avw-button>
		<avw-button hover-type="warning" plain type="warning" @click="onClick('warning-plain')">warning</avw-button>
		<avw-button hover-type="warning" plain type="danger" @click="onClick('danger-plain')">danger</avw-button>
	</div>
	<div class="components-row">
		<avw-button hover-type="danger" circle icon="avw-listtool-addparticle" type="default"></avw-button>
		<avw-button hover-type="danger" circle icon="avw-listtool-edit" type="primary"></avw-button>
		<avw-button hover-type="danger" circle icon="avw-listtool-delete" type="success"></avw-button>
		<avw-button hover-type="primary" circle icon="avw-experimental" type="info"></avw-button>
		<avw-button hover-type="primary" circle icon="avw-2dview" type="warning"></avw-button>
		<avw-button hover-type="primary" circle icon="avw-environment" type="danger"></avw-button>
	</div>
</template>

<script setup lang="ts">
const onClick = (str: string) => {
	console.log(`我是 ${str} 自定义按钮`);
};
</script>
