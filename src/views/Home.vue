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
          <input class="input" v-model="name" placeholder="Username">
          <button class="button is-primary" v-on:click="login">Login {{name}}</button>
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
      this.getData();
      this.$store.dispatch("login", this.name);
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
  //animation: flash 2s;
  animation-iteration-count: infinite;
}
img {
  width: 100%;
}
.card {
  width: 100%;
}

@keyframes slideIn {
  0% {
    transform: translateY(100px);
  }
  80% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
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
  }
}
</style>

