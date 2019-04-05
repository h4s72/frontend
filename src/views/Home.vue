<template>
  <div class="container">
    <div class="home columns is-gapless">
      <div class="card column">
        <div class="card-header column">
          <h1>Leaderboard</h1>
        </div>
        <div class="card-body column">
          <Leaderboard :users="users"></Leaderboard>
        </div>
        <div class="card-bottom column">
          <input class="input" v-model="name" placeholder="Username">
          <button class="button is-primary" v-on:click="login">Login {{name}}</button>
        </div>
      </div>
    </div>
    <div class="home columns is-gapless" v-if="user">
      <div class="card column">
        <div class="card-header column">
          <h1>hello {{user.username}}</h1>
        </div>
        <div class="card-body column" v-if="user">
          <h1>
            <b>User:</b>
            {{user.username}}
          </h1>
          <h1>
            <b>Level:</b>
            {{user.level}}
          </h1>
          <h1>
            <b>Badge:</b>
            {{user.badges}}
          </h1>
          <h1>
            <b>Progression:</b>
            {{user.progression}}
          </h1>
        </div>
        <div class="card-bottom column">
          <h1>{{storeData.body}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from "../components/Leaderboard.vue";
export default {
  name: "home",
  data() {
    return {
      name: "",
      users: [
        { name: "daniel", score: 10 },
        { name: "olle", score: 80 },
        { name: "greta", score: 32000 }
      ]
    };
  },
  components: {
    Leaderboard
  },
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
  width: 50%;
  animation: rotate 2s;
  animation-iteration-count: infinite;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
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
</style>

