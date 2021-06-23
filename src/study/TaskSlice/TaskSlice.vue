<template>
  <div class="TaskSlice">
    <!-- 正常渲染 -->
    <div>
      <h1>正常渲染</h1>
      <div v-for="(item, index) in arr1" :key="index">{{ item }}</div>
    </div>
    <!-- 任务切片处理后渲染 -->
    <div>
      <h1>任务切片处理后渲染</h1>
      <div v-for="(item, index) in arr2" :key="index">{{ item }}</div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import TaskSlice from "./index.js";
export default {
  setup() {
    const arr1 = reactive([]);
    for (let i = 0; i < 20; i++) {
      arr1.push(i);
    }
    const arr2 = reactive([]);
    TaskSlice.init({
      sliceList: 20,
      callback: function (i) {
        arr2.push(i);
      },
    });
    return { arr1, arr2 };
  },
};
</script>
<style lang='less' scoped>
.TaskSlice {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
</style>