<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>


<script>
import Login from "./components/Login.vue";
export default {
  data() {
    return {
      loginError: false
    };
  },

  components: {
    Login
  },

  methods: {
    getUser(name) {
      this.$store.dispatch("getUser", name).catch(err => {
        this.loginError = true;
      });
    }
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f7fafc;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.card {
  width: 100%;
  margin-bottom: 20px;
}
.card-bottom {
  border-top: 1px solid rgba(109, 109, 109, 0.671);
}
.card-header {
  border-bottom: 1px solid rgba(109, 109, 109, 0.671);
}
.home {
  animation: slideIn 1s;
  transition: 0.5s box-shadow;
  &:hover {
    box-shadow: 5px 5px 5px rgba(146, 146, 146, 0.849);
    transition: 0.5s box-shadow;
  }
  h1 {
    font-size: 2em;

    &:hover {
      transition: 0.5s;
      color: rgb(81, 61, 155);
      cursor: pointer;
    }
  }
}
</style>
