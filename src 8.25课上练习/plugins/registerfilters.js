import moment from "moment";
const filter = {
  change(data) {
    return (data = "hahaha");
  },
  time(time) {
    return moment(time).format("YYYY/MM/DD HH:mm:ss");
  },
};
function registerFilters(Vue) {
  for (const key in filter) {
    Vue.filter(key, filter[key]);
  }
}

export default registerFilters;
