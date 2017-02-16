<template>

  <ul id="survey">
      <li v-for="question in questions">
        {{ question.message }}
      </li>
  </ul>

</template>


<script>

export default {
  name: 'survey',
  data () {
    return {
      questions: [
        {message: 'question1'},
        {message: 'question2'}
      ]
    }
  }
}

</script>

