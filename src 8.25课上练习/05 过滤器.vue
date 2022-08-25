<template>
  <div>
    {{ msg | toUpper }}

    <input type="text" :value="msg | change | toUpper" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },
  filters: {
    toUpper(msg) {
      return msg.toUpperCase();
    },
  },
};
</script>

<style lang="less" scoped></style>
