<template>
  <section>
    <h2>{{ counter_value }}</h2>
    <div class="container-sm">
      <input type="number" class="form-control" v-model="first" />
      <br />
      <input type="number" class="form-control" v-model="second" />
    </div>

    <div class="row mt-5">
      <div class="col-lg-3">
        <button type="button" @click="perform('add')">Addition</button>
      </div>
      <div class="col-lg-3">
        <button type="button" @click="perform('sub')">Subtraction</button>
      </div>
      <div class="col-lg-3">
        <button type="button" @click="perform('mul')">Multiplication</button>
      </div>
      <div class="col-lg-3">
        <button type="button" @click="perform('div')">Division</button>
      </div>
      <br />
      <div class="col-lg-3">
        <button type="button" @click="eventBus">Event Bus</button>
      </div>
    </div>
  </section>
</template>

<script>
import opration from "./Mixins/opration";
import { EventBus } from "../event-bus";
export default {
  mixins: [opration],
  data() {
    return {
      first: "",
      second: "",
      counter_value: "",
    };
  },
  methods: {
    perform(opration) {
      switch (opration) {
        case "add":
          this.counter_value = this.addition(this.first, this.second);
          break;
        case "sub":
          this.counter_value = this.subtration(this.first, this.second);
          break;
        case "mul":
          this.counter_value = this.multiplication(this.first, this.second);
          break;
        case "div":
          this.counter_value = this.division(this.first, this.second);
          break;

        default:
          this.counter_value = 0;
          break;
      }
    },
    eventBus() {
      this.$router.push("/");
      setTimeout(() => {
        EventBus.$emit("event_Data", {
          name: "test",
          age: 355,
        });
      }, 1000);
    },
  },
};
</script>

<style></style>
