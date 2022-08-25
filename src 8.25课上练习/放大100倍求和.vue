<template>
  <div>
    <button @click="getSum">点击放大一百倍</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
  methods: {
    getSum() {
      let sum = this.arr.reduce(function (p, curr) {
        return (p = p + curr * 100);
      }, 0);
      console.log(sum);
    },
  },
};
</script>

<style scoped></style>
