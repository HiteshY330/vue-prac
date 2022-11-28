<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ pass_pdata }}</p>
    <p>Name:{{ event_bus.name }}</p>
    <p>Age:{{ event_bus.age }}</p>
    <Demo @emitted="emitData" :new_data="new_data" />
  </div>
</template>

<script>
import Demo from "./DemoPage.vue";
import { EventBus } from "../event-bus";
export default {
  components: { Demo },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      new_data: "passing the data using propos",
      pass_pdata: "",
      event_bus: "",
    };
  },

  methods: {
    emitData(emitDatas) {
      console.log(emitDatas);
      this.pass_pdata = emitDatas;
    },
  },
  mounted() {
    EventBus.$on("event_Data", (data) => {
      console.log(data);
      this.event_bus = data;
    });
  },
  destroyed() {
    EventBus.$off("event_Data");
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
