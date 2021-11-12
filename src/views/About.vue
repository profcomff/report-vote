<template>
  <div class="container-fluid">
    <div>
      <h2>Спасибо, что проявили интерес к отчету профкома</h2>
      <p>
        Сейчас вам будет предложено ответить на 6 вопросов о работе профкома по
        следующей повестке:
      </p>
      <ol>
        <li>
          Отчет Профкома о работе за период ноябрь 2020 г. - октябрь 2021 г.
        </li>
        <li>
          Отчет контрольно-ревизионной комиссии за период ноябрь 2020 г. -
          октябрь 2021 г.
        </li>
        <li>Выборы членов Профкома студентов.</li>
        <li>Выборы контрольно-ревизионной комиссии Профкома студентов.</li>
        <li>Выборы контрольно-ревизионной комиссии Профкома студентов.</li>
        <li>Разное.</li>
      </ol>
    </div>
    <div class="controls">
      <router-link to="/question" class="btn btn-primary">Начать!</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.container-fluid > * {
  text-align: left;
}

div.controls {
  text-align: center;
}
</style>
