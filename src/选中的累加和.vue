<template>
  <div>
    <label v-for="(item, index) in arr" :key="index">
      <input type="checkbox" :value="item" v-model="num" />
      <span>{{ item }}</span>
    </label>

    <span>你选中的累加和为：{{ total }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      num: [],
    };
  },
  computed: {
    total() {
      return this.num.reduce((pre, curr) => {
        return pre + curr;
      }, 0);
    },
  },
};
</script>

<style lang="less" scoped></style>
