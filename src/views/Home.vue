<template>
  <div class="container">
    <div class="home columns is-gapless">
      <div class="card column">
        <div class="card-header column">
          <h1>H4S72</h1>
        </div>
        <div class="card-body column">
          <img src="mission.png">
        </div>
        <div class="card-bottom column">
          <input v-model="name">
          {{name}}
          <button class="button" v-on:click="login">login</button>
        </div>
      </div>
    </div>
    <div class="home columns is-gapless" v-if="storeData">
      <div class="card column">
        <div class="card-header column">
          <h1>{{storeData.name}}</h1>
        </div>
        <div class="card-body column">
          <h1>{{storeData.body}}</h1>
        </div>
        <div class="card-bottom column" v-if="user">{{user}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: ""
    };
  },
  components: {},
  computed: {
    user() {
      return this.$store.getters["user"];
    },
    storeData() {
      return this.$store.getters["storeData"];
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", name);
    },
    getData() {
      this.$store.dispatch("getData");
    }
  }
};
</script>


<style lang="scss" scoped>
* {
  //border: 1px solid black;
}
button {
  width: 100%;
}
img {
  width: 100%;
}
.card {
  width: 100%;
}

.card-bottom {
  border-top: 1px solid rgba(109, 109, 109, 0.671);
}
.card-header {
  border-bottom: 1px solid rgba(109, 109, 109, 0.671);
}
.home {
  transition: 0.5s box-shadow;
  &:hover {
    box-shadow: 5px 5px 5px rgba(146, 146, 146, 0.849);
    transition: 0.5s box-shadow;
  }
  h1 {
    font-size: 2em;
  }
}
</style>

