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
      <transition name="flipflop" mode="in-out">
        <b-alert v-if="alertMessage.text != ''"
		 :variant="alertMessage.type">
          {{ alertMessage.text }}</b-alert        >
        <div class="optionsmenu" v-else>
          <b-button v-if="anime.id === null" @click="saveAnime">save</b-button>
          <b-button v-else @click="editAnime">editar</b-button>
          <b-button @click="getAnimes">getAnimes</b-button>
          <b-button @click="orderAnimesByName">orderAnimesByName</b-button>
        </div>
      </transition>
    </b-card>
    <hr />
    <transition-group
      enter-active-class="animated shake"
      enter-leave-class="animated shake"
    >
      <b-list-group
        v-for="({ name, stars, id }, indc) of animes"
        :key="indc + 1"
      >
        <b-list-group-item>
          <details>
            <summary>id</summary>
            {{ id }}:
          </details>

          <div>{{ name }} , {{ stars }} estrelas</div>
          <b-button @click="loadEditAnimeByIndex(indc)">editar</b-button>

          <b-button @click="deleteAnime(id)">limpar</b-button>
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
      alertMessage: {
        type: "success",
        text: "",
      },
      anime: {
        id: null,
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
      let animeArrayExample = [
        "kimetsu no yaiba",
        "naruto",
        "rezero",
        "castlevania",
      ];
      animeArrayExample.sort();
      console.log(animeArrayExample);
      this.animes.sort(function (anime, nextAnime) {
        let nextAnimeComesFirst = anime.name > nextAnime.name;
        if (nextAnimeComesFirst) return 1;
        if (!nextAnimeComesFirst) return -1;
        else return 0;
      });
    },
    saveAnime() {
      this.$http.post(COLLECTION_NAME, this.anime).then(({ data }) => {
        this.getAnimes();
        this.limpar();
        this.alertMessage.text = `anime ${data.name} cadastrado com sucesso`;
        setTimeout(() => {
          this.alertMessage.text = "";
        }, 2000);
      });
    },
    getAnimes() {
      this.$http.get(COLLECTION_NAME).then(({ data }) => {
        this.animes = data;
      });
    },
    editAnime() {
      this.$http.patch(`/animes/${this.anime.id}.json`, this.anime).then(() => {
        this.getAnimes();
        this.limpar();
      });
    },
    loadEditAnimeByIndex(id) {
      let anime = this.animes[id];
      this.anime = { ...anime };
    },
    deleteAnime(id) {
      this.$http.delete(`/animes/${id}.json`).then(() => this.getAnimes());
      //this.limpar()
    },
    limpar() {
      this.anime = {
        id: null,
        name: "",
        stars: 0,
      };
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
@keyframes pffp-in {
 from{  transform: translateZ(0px);}
 to{  transform: translateZ(45px);}
}
@keyframes pffp-out {
 from{  transform: translateZ(45px);}
 to{  transform: translateZ(0px);}
}
.flipflop-enter-active {
	animation:pffp-in 2s ease;
}
.flipflop-leave-active{
	animation:pffp-out 2s ease;
}
</style>
