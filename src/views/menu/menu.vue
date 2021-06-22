<template>
  <div class="menu">
    <el-menu :uniqueOpened="true" default-active="0">
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.name"
        @click="$router.replace(item.path)"
        style="text-align: center"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import router from "@/router/routers/study";
import { reactive } from "vue";
export default {
  setup() {
    const menuList = reactive(router.filter(item => item.path != '/'));
    console.log(menuList)
    return { menuList };
  },
};
</script>
<style lang='less' scoped>
.menu {
  /deep/ .el-menu {
    min-height: 100vh;
  }
}
</style>