<template>
  <form class="dialog-container" @submit.prevent @submit="send">
    <div class="form-group">
      <label for="emailInput">Email</label>
      <input
        type="email"
        class="form-control"
        id="emailInput"
        placeholder="ivanov.ii@physics.msu.ru"
        v-model="email"
        required
      />
    </div>
    <div class="form-group">
      <label for="passwordInput">Пароль</label>
      <input
        type="password"
        class="form-control"
        id="passwordInput"
        placeholder="Пароль"
        v-model="password"
        required
      />
      <p class="text-muted">
        <small>
          Если вы зарегистрировались и подтвердили свой адрес электронной почты,
          то мы прислали пароль вам на почту.<br />
          <a href="https://report.profcomff.com/faq" target="_blank">
            Не получили пароль?
          </a>
        </small>
      </p>
    </div>
    <div class="form-group form-control-box">
      <button
        class="btn btn-primary"
        @click="this.$emit('login_clicked', this.email, this.password)"
      >
        Вход
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "login-dialog",
  data() {
    return {
      email: localStorage.email,
      password: "",
    };
  },
};
</script>

<style scoped>
form.dialog-container {
  text-align: justify;
}

form > .form-group {
  margin: 20px auto;
}

form > .form-control-box {
  text-align: center;
}
</style>
