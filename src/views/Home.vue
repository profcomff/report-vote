<template>
  <div class="container-fluid">
    <h2>Готовы проголосовать?</h2>
    <login-dialog>
      <button class="btn btn-primary">Вход</button>
    </login-dialog>
    <p class="text-muted">
      <small>
        Еще не зарегистрированы?
        <a href="https://report.profcomff.com" target="”_blank”">
          Перейти к регистрации
        </a>
      </small>
    </p>
  </div>
</template>

<script>
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  components: {
    LoginDialog,
  },
};
</script>

<style scoped>
div.container-fluid > * {
  margin: 20px 0;
}
</style>
