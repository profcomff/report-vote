<template>
  <div>
    <h2>Вопрос {{ current_question }} из {{ total_questions }}</h2>
    <p>{{ text }}</p>
    <div class="form-group form-control-box">
      <button
        class="btn btn-success"
        @click="this.$emit('ans_clicked', this.id, 'yes')"
      >
        Да
      </button>
      <button
        class="btn btn-danger"
        @click="this.$emit('ans_clicked', this.id, 'no')"
      >
        Нет
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "question-dialog",
  props: ["current_question", "total_questions", "id", "text"],
};
</script>

<style scoped>
.form-control-box > button {
  margin: 20px;
  width: 40%;
}
</style>
