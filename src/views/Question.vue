<template>
  <div>
    <question-dialog
      :current_question="current_question + 1"
      :total_questions="questions.length"
      :id="questions[current_question].id"
      :text="questions[current_question].text"
      @ans_clicked="ans_clicked"
    />
  </div>
</template>

<script>
import QuestionDialog from "@/components/QuestionDialog.vue";
import axios from "axios";

var axios_session = axios.create({
  baseURL: "https://app.profcomff.com/report/api",
});

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
    ans_clicked(id, ans) {
      console.log(id, ans);
      axios_session.post(`/question/${id}`, {
        token: localStorage.token,
        answer: ans,
      });
      if (this.current_question + 1 >= this.questions.length) {
        localStorage.clear();
        this.$router.push("/finish");
        return;
      }
      this.current_question += 1;
    },
  },
};
</script>
