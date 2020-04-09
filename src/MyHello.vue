
<template>
  <h1>
    {{name}}
  </h1>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: 'MyHello',
    data: function() {
      return {
        name: 'Hello World Again',
      }
    },
  });
</script>


