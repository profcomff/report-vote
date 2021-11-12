<template>
  <div class="dialog-container">
    <h2>Не удалось</h2>
    <p>
      Что-то пошло не так при входе. Возможно вы неверно ввели адрес электронной
      почты или пароль. Попробуйте еще раз.
      <a
        href="https://report.profcomff.com/faq"
        target="_blank"
        rel="noopener noreferrer"
      >
        Не помогло?
      </a>
    </p>
    <router-link to="/" class="btn btn-primary">Вернуться</router-link>
  </div>
</template>

<script>
export default {};
</script>
