<template>
  <div>
    <h4 class="text-primary">{{ msg }}</h4>
    <div v-for="(data, index) in userdata" :key="index">
      <img :src="data.avatar" />
      <p>
        {{ data.first_name }} <br />
        {{ data.email }}
      </p>
    </div>
    <div class="col-lg-6 col-ml-6 col-sm-12">
      <img src="../assets/logo.png" />
    </div>
    <div class="col-lg-6 col-ml-6 col-sm-12">
      <h3>
        {{ counter }}
      </h3>
      <button @click="increment">INC 10</button>&nbsp;
      <button @click="decrement">DEC</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "This is First Component!",
    };
  },
  computed: {
    counter() {
      return this.$store.getters.getCounter;
    },
    userdata() {
      return this.$store.getters.getUsersData;
    },
  },
  methods: {
    /*increment() {
      this.$store.commit("INC");
    },*/
    increment() {
      this.$store.commit("INC", {
        value: 10,
      });
    },
    decrement() {
      this.$store.commit("DEC");
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(this.userdata);
    }, 1000);
  },
};
</script>
<style></style>
