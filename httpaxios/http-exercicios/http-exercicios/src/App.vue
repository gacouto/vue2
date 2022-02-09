<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="nome">
        <b-form-input v-model="anime.name"></b-form-input>
      </b-form-group>
      <b-form-group label="stars">
        <b-form-input
          type="number"
          size="lg"
          v-model.number="anime.stars"
        ></b-form-input>
      </b-form-group>
      <b-button @click="saveAnime">save</b-button>
      <b-button @click="getAnimes">getAnimes</b-button>
      <b-button @click="orderAnimesByName">orderAnimesByName</b-button>
    </b-card>
    <hr />
    <transition-group 
	enter-active-class="animated shake"
	enter-leave-class="animated shake">
      <b-list-group v-for="({ name, stars, animeId }, indc) of animes"
          :key="indc+1">
        <b-list-group-item>
          <details>
            <summary>id</summary>
            {{ animeId }}:
          </details>

          <div>{{ name }} , {{ stars }} estrelas</div>
        </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
const COLLECTION_NAME = "animes.json";
export default {
  data() {
    return {
      anime: {
        name: "",
        stars: 0,
      },
      animes: [],
    };
  },
  methods: {
    orderAnimesByName() {
      /* this.animes.reduce((acc,cur)=>{
			cur.name+=cur.stars
		}) */
      let simpleArraySort = [
        "kimetsu no yaiba",
        "naruto",
        "rezero",
        "castlevania",
      ];
      simpleArraySort.sort();
      console.log(simpleArraySort);

      this.animes.sort(function (anime, nextAnime) {
        let nextAnimeComesFirst = anime.name > nextAnime.name;
        if (nextAnimeComesFirst) return 1;
        if (!nextAnimeComesFirst) return -1;
      });
    },
    saveAnime() {
      this.$http
        .post(COLLECTION_NAME, this.anime)
        .then((res) => this.getAnimes());
    },
    getAnimes() {
      this.$http.get(COLLECTION_NAME).then(({ data }) => {
        this.animes = data;
        //console.log(data)
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
