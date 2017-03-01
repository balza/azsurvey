<template>
  
  <div class="tab-pane fade in">
      <div v-for="question in questions" align="left">
        {{question.message}}
          <star-rating 
            v-bind:star-size="10"
            v-bind:max-rating="10" 
            @rating-selected="syncRating">
        </star-rating/> 
      </div>
  </div>

</template>


<script>
  import StarRating from 'vue-star-rating'

  export default {
    name: 'survey',
    data () {
      return {
        questions: [
          {message: 'ti piacciono i fiori?'},
          {message: 'vuoi bene alla mamma?'}
        ]
      }
    },
    components: {
      StarRating
    },
    methods: {
      syncRating (rating) {
        this.rating = rating
      }
    }
  }

</script>

