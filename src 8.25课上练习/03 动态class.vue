<template>
  <div>
    <span :class="{ active: flag }">你好，李焕英</span>
    <button @click="flag = !flag">改变</button>

    <span :style="{ 'background-color': color }">你好。狗蛋</span>
    <button @click="color = 'red'">改变</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      color: "green",
    };
  },
};
</script>

<style lang="less" scoped>
.active {
  background-color: red;
  color: gold;
}
</style>
