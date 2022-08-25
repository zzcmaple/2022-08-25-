<template>
  <div>
    <ul>
      <li v-for="item in arr2" :key="item.id">
        <span>姓名 {{ item.name }}</span
        ><br />
        <span>性别 {{ item.sex }}</span
        ><br />
        <span>爱好 {{ item.hobby }}</span
        ><br />
      </li>
    </ul>

    <ul>
      <li v-for="(value, key) in obj" :key="key">{{ key }}::{{ value }}</li>
    </ul>

    <ul>
      <li v-for="(item, index) in num" :key="index">{{ item }}</li>
    </ul>

    <ul>
      <li v-for="(item, index) in str" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr2: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      obj: {
        uname: "张三",
        age: 21,
        sex: "男",
      },
      num: 20,
      str: "hello",
    };
  },
  methods: {
    change() {
      this.a = !this.a;
      if (this.a) {
        this.str = "收起";
      } else {
        this.str = "展开";
      }
    },
  },
};
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .title h4 {
      line-height: 2;
      margin: 0;
    }
    .container {
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .btn {
      /* 鼠标改成手的形状 */
      cursor: pointer;
    }
  }
}
</style>
