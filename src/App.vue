<template>
  <div class="app">
    <div class="app_menu">
      <Menu />
    </div>
    <div class="app_content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Menu from "@/views/menu/menu";
export default {
  components: {
    Menu,
  },
};
</script>
<style lang='less' scoped>
.app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .app_menu {
    height: 100%;
    width: 150px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .app_content {
    box-sizing: border-box;
    padding: 20px;
    flex: 1;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>