<template>
	<div class="components-row">
		<avw-button type="default" @click="onClick('default')">default</avw-button>
		<avw-button type="primary" @click="onClick('primary')">primary</avw-button>
		<avw-button type="success" @click="onClick('success')">success</avw-button>
		<avw-button type="info" @click="onClick('info')">info</avw-button>
		<avw-button type="warning" @click="onClick('warning')">warning</avw-button>
		<avw-button type="danger" @click="onClick('danger')">danger</avw-button>
	</div>
	<div class="components-row">
		<avw-button plain type="default" @click="onClick('default-plain')">default</avw-button>
		<avw-button plain type="primary" @click="onClick('primary-plain')">primary</avw-button>
		<avw-button plain type="success" @click="onClick('success-plain')">success</avw-button>
		<avw-button plain type="info" @click="onClick('info-plain')">info</avw-button>
		<avw-button plain type="warning" @click="onClick('warning-plain')">warning</avw-button>
		<avw-button plain type="danger" @click="onClick('danger-plain')">danger</avw-button>
	</div>
	<div class="components-row">
		<avw-button round type="default" @click="onClick('default-round')">default</avw-button>
		<avw-button round type="primary" @click="onClick('primary-round')">primary</avw-button>
		<avw-button round type="success" @click="onClick('success-round')">success</avw-button>
		<avw-button round type="info" @click="onClick('info-round')">info</avw-button>
		<avw-button round type="warning" @click="onClick('warning-round')">warning</avw-button>
		<avw-button round type="danger" @click="onClick('danger-round')">danger</avw-button>
	</div>
	<div class="components-row">
		<avw-button circle icon="avw-listtool-addparticle" type="default" @click="onClick('default-circle')"></avw-button>
		<avw-button circle icon="avw-listtool-edit" type="primary" @click="onClick('primary-circle')"></avw-button>
		<avw-button circle icon="avw-listtool-delete" type="success" @click="onClick('success-circle')"></avw-button>
		<avw-button circle icon="avw-experimental" type="info" @click="onClick('info-circle')"></avw-button>
		<avw-button circle icon="avw-2dview" type="warning" @click="onClick('warning-circle')"></avw-button>
		<avw-button circle icon="avw-environment" type="danger" @click="onClick('danger-circle')"></avw-button>
	</div>
</template>

<script setup lang="ts">
const onClick = (str: string) => {
	console.log(`我是 ${str} 自定义按钮`);
};
</script>
