<template>
  <div>
    <h2>Голосование {{ current_question }} из {{ total_questions }}</h2>
    <div v-html="text"></div>
    <div class="form-group form-control-box">
      <button
        class="btn btn-success"
        @click="this.$emit('ans_clicked', this.id, 'yes')"
      >
        За
      </button>
      <button
        class="btn btn-danger"
        @click="this.$emit('ans_clicked', this.id, 'no')"
      >
        Против
      </button>
      <br/>
      <button
        class="btn"
        @click="this.$emit('ans_clicked', this.id, 'skip')"
      >
        Воздержаться
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
  margin-bottom: 0px;
  width: 40%;
}
</style>
