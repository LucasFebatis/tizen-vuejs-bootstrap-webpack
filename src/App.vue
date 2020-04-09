
<template>
  <h1>
    {{name}}
    <MyHello />
  </h1>
</template>

<script lang="ts">
  import Vue from "vue";
  import MyHello from "./MyHello.vue";

  export default Vue.extend({
    components: {
      MyHello
    },
    data: function() {
      return {
        name: 'Hello World! 2'
      }
    },
  });
</script>


