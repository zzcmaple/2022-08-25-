<template>
  <div>
    {{ person }}

    <button @click="change">改变对象</button>

    {{ arr }}
    <button @click="changeArr">改变数组</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        uname: "zs",
        age: 18,
      },
      arr: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    change() {
      this.$set(this.person, "address", "敦化市");
    },
    changeArr() {
      this.$set(this.arr, 3, 7);
    },
  },
};
</script>

<style lang="less" scoped></style>
