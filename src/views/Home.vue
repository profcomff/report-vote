<template>
  <div class="container-fluid">
    <h2>Готовы проголосовать?</h2>
    <div class="controls">
      <login-dialog @login_clicked="login_clicked" />
      <p class="text-muted">
        <small>
          Еще не зарегистрированы?
          <a href="https://report.profcomff.com" target="”_blank”">
            Перейти к регистрации
          </a>
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import LoginDialog from "@/components/LoginDialog.vue";
import axios from "axios";

var axios_session = axios.create({
  baseURL: "https://app.profcomff.com/report/api",
});

export default {
  components: {
    LoginDialog,
  },
  data() {
    return {};
  },
  methods: {
    login_clicked(email, password) {
      localStorage.email = email;
      axios_session
        .post("/login", {
          email: email,
          password: password,
        })
        .then(this.login_complete)
        .catch(this.login_failed);
    },
    login_complete(response) {
      localStorage.token = response.data.token;
      localStorage.questions = JSON.stringify(response.data.questions);
      this.$router.push("/start");
    },
    login_failed(error) {
      console.error(error.response.data);
      this.$router.push("/error");
    },
  },
};
</script>

<style scoped>
</style>
