<template>
  <section class="tcenter">
    <transition name="flipflop" mode="out-in">
      <div class="msgAlert" v-show="messageAlert">{{ messageAlert }}</div>
    </transition>
    <div class="d-flex">
      <span>
        <h3 class="" contenteditable>lista usuarios</h3>
        <ul class="lista">
          <span v-for="(links, indx) of linksList" :key="indx">
            <!-- path do link gerado automatica, isTokenPresent nao aparece no filho -->
            <router-link
              tag="li"
              :to="links"
              :isTokenPresent="1"
              class="item-lista"            >
              {{ links.params.iduser }}</router-link >
          </span>
        </ul>
      </span>
      <span>
        <input  type="range"  v-model="numberOfLinksOnList"
          name="vol"   min="3"    max="50"     />
      </span>
      <div>
        <p>{{ "test/3" | removeBackslash }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      linksList: [
        {
          name: "userDetails",
          params: { iduser: 3 },
          query: { favoriteFood: "pizza" },
          hash: "#footer",
        },
        {
          name: "userDetails",
          params: { iduser: 2 },
          query: { favoriteFood: "hamburger" },
        },
        {
          name: "userDetails",
          params: { iduser: 1 },
          query: { favoriteFood: "açai" },
        },
      ],
      numberOfLinksOnList: 3,
      messageAlert: "",
    };
  },
  watch: {
    numberOfLinksOnList(newValue, oldValue) {
      /* let lastLinkFromList = this.linksList[this.linksList.length - 1];
      let linkModelObject = { ...lastLinkFromList };      
      linkModelObject.params.iduser = Number(newValue);
       objetos duplicados
       */
       let linkModelObject = {
          name: "userDetails",
          params: { iduser: Number(newValue) },
          query: { favoriteFood: "açai" },
        }
        
      let goingUp = newValue > oldValue;
      if (goingUp) {
        this.messageAlert =
          "o tamanho da lista agora é " +
          this.linksList.unshift(linkModelObject);
          
        setTimeout(() => {
          this.messageAlert = "";
        }, 4500);
      }else {
        this.messageAlert =
          "o elemento removido da lista foi " + this.linksList.shift();
        setTimeout(() => {
          this.messageAlert = "";
        }, 4500);
      }
    },
  },
  filters: {
    removeBackslash(userRouteString) {
      let [partOne, partTwo] = userRouteString.split("/");
      return `${partOne} ${partTwo}`;
    },
  },
};
</script>
<style scoped>
.d-flex {
  display: flex;
  flex-direction: row;
}
.tcenter {
  text-align: center;
}
.msgAlert {
  background: wheat;
  font-size: 20px;
  color: black;
  padding: 1% 8%;
  border-radius: 40px;
  min-width: 200px;
}
input[type="range"] {
  border: 4px solid red;
  transform: rotate(-90deg);
  margin-top: 50%;
}
</style>