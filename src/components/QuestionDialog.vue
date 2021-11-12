<template>
  <div>
    <h2>Вопрос {{current_question}} из {{total_questions}}</h2>
    <p>{{text}}</p>
    <div class="form-group form-control-box">
      <button class="btn btn-success" @click="yes_clicked">Да</button>
      <button class="btn btn-danger" @click="no_clicked">Нет</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "question-dialog",
  props: ["current_question", "total_questions", "id", "text"],
  methods: {
    yes_clicked() {
      console.log(this.id, 'yes');
      this.$emit('yes_clicked')
    },
    no_clicked() {
      console.log(this.id, 'no');
      this.$emit('no_clicked')
    },
  }
}
</script>

<style scoped>
.form-control-box > button {
  margin: 20px;
  width: 40%;
}
</style>
