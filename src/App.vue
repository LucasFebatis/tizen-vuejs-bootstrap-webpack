
<template>
  <b-container>
    <b-row>
      <b-col>col</b-col>
      <b-col>col</b-col>
      <b-col>col</b-col>
      <b-col>col</b-col>
    </b-row>

    <b-row>
      <b-col cols="8">col-8</b-col>
      <b-col cols="4">col-4</b-col>
    </b-row>

    <b-row>
      <h1>{{name}}</h1>

      <MyHello />
      <router-view></router-view>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <button v-on:click="goBack()">Adiciona 1</button>
      <div>
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
      </div>
    </b-row>
  </b-container>
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


