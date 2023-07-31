<template>
	<button class="avw-button" @click="$emit('click', $event)">
		<slot></slot>
	</button>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'avw-button',
});
defineEmits(['click']);
</script>

<style scoped>
.avw-button {
	border: 1px solid gray;
	padding: 7px 15px;
	cursor: pointer;
}
</style>
