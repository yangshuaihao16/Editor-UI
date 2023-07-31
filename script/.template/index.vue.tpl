<template>
  <div class="{{ use }}">
    我是{{ label }}组件
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
	  name: '{{ use }}',
  });
</script>

<style lang="scss" scoped>
.{{ use }} {
  
}
</style>