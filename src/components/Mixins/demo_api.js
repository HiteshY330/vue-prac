import axios from "axios";
//import { reject, resolve } from "core-js/fn/promise";

export default {
  data() {
    return {
      error_msg: "",
      is_error: false,
    };
  },
  methods: {
    fetchuser() {
      return new Promise(async (resolve, reject) => {
        try {
          let reponse = await axios.get("https://reqres.in/api/users?page=2");
          if (reponse.status === 200) {
            resolve(reponse.data);
          } else {
            reject(reponse.reason);
            this.error_msg = reponse.data.reason;
          }
        } catch (error) {
          this.error_msg = error.reponse.data;
        }
      });
    },
  },
};
