<template>
  <div class="container">
    <div class="home columns is-gapless">
      <div class="card column">
        <div class="card-header column">
          <h1>Vappa</h1>
        </div>
        <div class="card-body column">
          <button class="button is-primary" v-on:click="getData">Hämta</button>
          <h1 v-if="storeData">{{storeData}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  computed: {
    storeData() {
      return this.$store.getters["storeData"];
    }
  },
  methods: {
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

.card {
  width: 100%;
}

.card-header {
  border-bottom: 1px solid rgba(109, 109, 109, 0.671);
}
.home {
  box-shadow: 5px 5px 5px rgba(146, 146, 146, 0.849);
  margin-left: auto;
  margin-right: auto;
  h1 {
    font-size: 2em;
  }
}
</style>

