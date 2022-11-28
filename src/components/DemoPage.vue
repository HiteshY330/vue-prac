<template>
  <div>
    <h3 class="color-red">Demo Component</h3>
    <h4>{{ counter }}</h4>
    <h4>{{ pass_data }}</h4>
    <button @click="performEmit">Emitted</button>
  </div>
</template>

<script>
import opration from "./Mixins/opration";
export default {
  mixins: [opration],
  props: ["new_data"],
  data() {
    return {
      counter: "",
      pass_data: "",
      pass_top: "pass data to parent",
    };
  },
  methods: {
    performEmit() {
      this.$emit("emitted", this.pass_top);
    },
    perform(opration) {
      switch (opration) {
        case "add":
          this.counter = this.addition(10, 10);
          break;
        /*case "sub":
          this.counter = this.subtration(this.first, this.second);
          break;
        case "mul":
          this.counter = this.multiplication(this.first, this.second);
          break;
        case "div":
          this.counter = this.division(this.first, this.second);
          break;*/

        default:
          this.counter_value = 0;
          break;
      }
    },
  },
  mounted() {
    this.perform("add");
    console.log(this.new_data);
    this.pass_data = this.new_data;
  },
};
</script>

<style scoped>
.color-red {
  color: red;
}
</style>
