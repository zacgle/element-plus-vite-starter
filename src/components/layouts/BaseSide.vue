<template>
	<el-container class="layout-container-demo" style="height: 100vh">
		<el-aside width="200px">
			<el-menu
				default-active="$route.path"
				class="el-menu-vertical-demo"
				:collapse="isCollapse"
				@open="handleOpen"
				@close="handleClose"
				router
				style="height: 100vh"
			>
				<template v-for="path in $router.options.routes">
					<el-sub-menu
						v-if="path.children"
						:index="path.path"
						v-for="child in path.children"
					>
						<template #title>
							<el-icon>
								<Location />
							</el-icon>
							<span
								style="font-size: larger; font-family: SimHei; font-weight: 900"
								>{{ path.meta.title }}</span
							>
						</template>

						<el-menu-item :index="child.path">{{
							child.meta.title
						}}</el-menu-item>
					</el-sub-menu>
					<el-menu-item
						v-else-if="
							path.meta.title != '首页' && path.meta.title != '页面没有找到'
						"
						:index="path.path"
						><span
							style="font-size: larger; font-family: SimHei; font-weight: 900"
							>{{ path.meta.title }}</span
						></el-menu-item
					>
				</template>
				<!-- <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="/demos/gpt">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item> -->
			</el-menu>
		</el-aside>
		<el-container>
			<el-header style="text-align: right; font-size: 12px; height: 3vh">
				<div class="toolbar"><span>测试</span></div></el-header
			>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import {
		Location,
		Document,
		Menu as IconMenu,
		Setting,
	} from "@element-plus/icons-vue";
	const isCollapse = ref(false);
	const handleOpen = (key: string, keyPath: string[]) => {
		console.log(key, keyPath);
	};
	const handleClose = (key: string, keyPath: string[]) => {
		console.log(key, keyPath);
	};
</script>
<style scoped>
	.layout-container-demo .el-header {
		position: relative;
		background-color: var(--el-color-info-light-9);
		color: var(--el-text-color-primary);
	}
	.layout-container-demo .el-aside {
		color: var(--el-text-color-primary--light-5);
		background: var(--el-color-primary-light-8);
	}
	.layout-container-demo .el-menu {
		border-right: 1px solid var(--el-color-primary-light-5);
	}
	.layout-container-demo .el-main {
		padding: 10;
	}
	.layout-container-demo .toolbar {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		right: 20px;
	}
</style>
