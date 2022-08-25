<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <span>{{ item }}</span> <button @click="del(index)">删除</button>
      </li>
    </ul>
    <button @click="addLi">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    addLi() {
      this.arr.push(this.getRandomIntInclusive(1, 100));
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  width: 20px;
  margin-right: 20px;
}
</style>
