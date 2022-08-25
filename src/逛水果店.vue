<template>
  <div>
    <table>
      <tr>
        <td>苹果10元每斤 现在购买有8折优惠</td>
      </tr>
      <tr>
        <td>请输入您要购买的斤数 <input type="number" v-model="num" /></td>
      </tr>
      <tr>
        <td><button @click="buy">结账买单</button></td>
      </tr>
      <tr>
        <td>
          结账单：总价{{ sum * 10 }}元，折后价{{ sum * 10 * 0.8 }}元，省了{{
            sum * 10 - sum * 10 * 0.8
          }}元
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      sum: 0,
    };
  },
  methods: {
    buy() {
      this.sum = this.num;
    },
  },
};
</script>

<style lang="less" scoped>
table,
td {
  border: 1px solid #333;
  text-align: center;
  border-collapse: collapse;
}
td {
  width: 1000px;
  height: 30px;
}
</style>
