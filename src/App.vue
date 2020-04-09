
<template>
  <h1>
    {{name}}
    <MyHello />
    <router-view>
      
    </router-view>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <button v-on:click="goBack()">Adiciona 1</button>
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
      name: "Hello World! 2"
    };
  },
  methods: {
    goBack() {
      this.$router.push("/foo");
    }
  }
});
</script>


