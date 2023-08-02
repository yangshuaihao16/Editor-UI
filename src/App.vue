<script setup lang="ts">
import { reactive } from 'vue';
import moment from 'moment';

import ComponentList from '/packages/components/list.json';

const data = reactive({
	links: ComponentList.map((item: any) => ({
		path: `/components/${item.use}`,
		name: item.label,
	})),
});

// console.log(data.links.value);
</script>

<template>
	<el-container class="editor-ui-demo">
		<el-header>
			<img src="/vite.svg" alt="logo" class="logo" />
			<h3>Editor-UI</h3>
		</el-header>
		<el-container>
			<el-aside width="200px">
				<el-scrollbar>
					<router-link v-for="(link, index) in data.links" :key="index" :to="link.path" class="router-link">{{
						link.name
					}}</router-link>
				</el-scrollbar>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
		<el-footer height="32px">
			<span>Copyright © 2020-2030 Jason. All rights reserved.</span>
			<span>{{ `V1.0.${moment().format('YYYYMMDD')}` }}</span>
		</el-footer>
	</el-container>
</template>

<style lang="scss" scoped>
.editor-ui-demo {
	height: 100%;
	background: #181818;

	.el-header {
		position: relative;
		background: linear-gradient(90deg, #181818, #2f3133);
		color: #fff;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #000;
	}

	.el-footer {
		position: relative;
		color: #9f9f9f;
		background: #282e39;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.el-container {
		margin-top: 1px;
		overflow: hidden;
	}

	.el-aside {
		background: #181818;
	}

	.el-main {
		background: #1f1f1f;
		color: #f1f1f1;
	}

	.logo {
		margin-right: 20px;
	}

	.router-link {
		background: #37373d;
		color: #fff;
		display: inline-block;
		width: 100%;
		height: 32px;
		font-size: 14px;
		line-height: 32px;
		padding: 0 20px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		border-left: 2px solid transparent;
		text-decoration: none;
		box-sizing: border-box;
		cursor: pointer;

		&:hover {
			background: #37373d;
		}

		&.actived {
			border-left: 2px solid #0080ff;
		}
	}
}
</style>
