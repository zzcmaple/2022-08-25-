<template>
  <div>
    <form action="">
      <div>
        <span>账号</span>
        <input type="text" v-model="user" />
      </div>
      <div>
        <span>密码</span>
        <input type="password" v-model="pwd" />
      </div>

      <span>男</span>
      <input type="radio" name="gender" v-model="gender" value="男" />

      <span>女</span>
      <input type="radio" name="gender" v-model="gender" value="女" />
      <div>
        <label for="">
          <span>学习:</span>
          <input type="checkbox" v-model="hobby" value="学习" />
        </label>
        <label for=""
          ><span>睡觉:</span>
          <input type="checkbox" v-model="hobby" value="睡觉"
        /></label>
        <label for=""
          ><span>吃饭:</span>
          <input type="checkbox" v-model="hobby" value="吃饭"
        /></label>
      </div>

      <div>
        <select v-model="place">
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="shijiazhuang">石家庄</option>
          <option value="hanzghou">杭州</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: "",
      gender: "",
      hobby: [],
      place: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
