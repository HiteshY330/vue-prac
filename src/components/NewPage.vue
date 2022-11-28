<template>
  <div>
    <h1>User Data</h1>

    <div class="container">
      <div class="row">
        <div class="col-lg-12" v-for="(data, index) in user_data" :key="index">
          <diV class="d-flex align-items-center">
            <div class="image">
              <img :src="data.avatar" alt="image" />
            </div>
            <div class="pl-2">
              <h1>{{ data.first_name }} {{ data.last_name }}</h1>
              <h1>{{ data.email }}</h1>
            </div>
          </diV>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import demo_api from "../components/Mixins/demo_api";
export default {
  mixins: [demo_api],
  data() {
    return {
      user_data: [],
    };
  },
  methods: {
    async getUserData() {
      try {
        let reponse = await this.fetchuser();
        //console.log(reponse);
        this.user_data = reponse.data;
        console.log(this.user_data);
        this.$store.commit("userData", this.user_data);
      } catch (error) {
        console.log("error");
        this.$store.commit("error_msg", error);
      }
    },
  },
  /*computed: {
    user_data() {
      return this.$store.getters.getUsersData;
    },
  },*/

  mounted() {
    this.getUserData();
    setTimeout(() => {
      console.log(this.user_data);
    }, 1000);
  },
};
</script>

<style></style>
