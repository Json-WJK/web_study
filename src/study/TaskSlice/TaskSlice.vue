<template>
  <div class>
    <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
  </div>
</template>
<script>
import { reactive } from "vue";
import TaskSlice from "./index.js";
export default {
  setup() {
    const arr = reactive([]);
    TaskSlice.init({
      sliceList: 20,
      callback: function (i) {
        arr.push(i)
      },
    });
    return { arr };
  },
};
</script>
<style lang='less' scoped>
</style>