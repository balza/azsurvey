<template>
  
  <div id="survey">
    <ul>
        <li v-for="question in questions">
          {{ question.message }}
        </li>
    </ul>
  </div>

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

