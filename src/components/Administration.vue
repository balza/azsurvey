<template>

  <div id="administration">
    <div>Administration</div>
    <input v-model="question" placeholder="enter a new question">
    <button v-on:click="addQuestion">Add Question</button>    
    <div v-for="q in questions">{{ q }}</div>
  </div>

</template>


<script>

export default {
  name: 'administration',
  data () {
    return {
      questions: []
    }
  },
  methods: {
    addQuestion: function (event) {
      this.questions.push(this.question)
    }
  }
}

</script>

