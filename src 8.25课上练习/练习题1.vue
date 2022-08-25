<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="sort">点我变一变</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["帅哥", "美女", "程序员"],
    };
  },
  methods: {
    sort() {
      this.arr.push(this.arr.shift());
    },
  },
};
</script>

<style scoped></style>
