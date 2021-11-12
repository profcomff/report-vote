<template>
  <div>
    <question-dialog
      :current_question="current_question + 1"
      :total_questions="questions.length"
      :id="questions[current_question].id"
      :text="questions[current_question].text"
      @yes_clicked="ans_clicked"
      @no_clicked="ans_clicked"
    />
  </div>
</template>

<script>
import QuestionDialog from "@/components/QuestionDialog.vue";

export default {
  components: { QuestionDialog },
  data() {
    return {
      token: localStorage.token,
      questions: JSON.parse(localStorage.questions),
      current_question: 0,
    };
  },
  methods: {
    ans_clicked() {
      if (this.current_question + 1 >= this.questions.length) {
        this.$router.push("/finish");
        return;
      }
      this.current_question += 1;
    },
  },
};
</script>
