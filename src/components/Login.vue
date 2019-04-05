
<template>
  <div>
    <h1>Shoplifters of the World</h1>
    <input class="input" v-model="name" placeholder="name">
    <button class="button is-primary" v-on:click="login">Login {{name}}</button>
  </div>
</template>

<script>
export default {
  props: {
    loginError: {
      type: Boolean
    }
  },

  data() {
    return {
      name: ""
    };
  },

  computed: {
    user() {
      return this.$store.getters["user"];
    }
  },
  methods: {
    login() {
      // this.$store.dispatch("login", this.name);
      //  this.$router.push({ name: "home" });
    }
  }
};
</script>
