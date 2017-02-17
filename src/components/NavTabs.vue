<template>

    <div id="navtabs">
      <ul class="nav nav-tabs">
        <li><router-link to="/hello">Home</router-link></li>
        <li><router-link to="/survey">Survey</router-link></li>
      </ul>
      <router-view></router-view>      
    </div>

</template>

<script>

  export default {
    name: 'navtabs'
  }

</script>
