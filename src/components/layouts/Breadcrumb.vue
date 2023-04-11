<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumb"
      :key="index"
      :to="item.link"
    >
      {{ item.text }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { ref, defineComponent, watch } from "vue";
import { useRoute, RouteRecordRaw } from "vue-router";

interface BreadcrumbItem {
  text: string;
  link: string;
}

export default defineComponent({
  setup() {
    const breadcrumb = ref<BreadcrumbItem[]>([]);
    const route = useRoute();

    // 监听路由变化，更新面包屑
    watch(
      () => route.matched,
      (matched: RouteRecordRaw[]) => {
        breadcrumb.value = matched.reduce(
          (acc: BreadcrumbItem[], cur: RouteRecordRaw) => {
            if (cur.meta && cur.meta.breadcrumb) {
              acc.push(...cur.meta.breadcrumb);
            }
            return acc;
          },
          []
        );
      },
      { immediate: true }
    );

    return {
      breadcrumb,
    };
  },
});
</script>
