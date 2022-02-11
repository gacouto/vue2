<template>
  <section class="tcenter">
    <transition name="flipflop" mode="out-in">
        <span class="msgAlert" v-if="messageAlert">{{ messageAlert }}</span>
    </transition>
    <div class="d-flex">
      <span>
        <h3 class="" contenteditable>lista usuarios</h3>
        <ul class="lista">
          <span v-for="(links, indx) of linksList" :key="indx">
            <router-link tag="li" :to="links" class="item-lista">
              {{ typeof links === "string" ? links : "usuario/2" }}</router-link   >
          </span>
        </ul>
      </span>
      <span>
        <input type="range"
          v-model="numberOfLinksOnList"
          name="vol"  min="3"  max="50"  />
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
        "usuario/3",
        { name: "userDetails", params: { iduser: 2 } },
        "usuario/1",
      ],
      numberOfLinksOnList: 3,
      messageAlert: "",
    };
  },
  watch: {
    numberOfLinksOnList(newValue, oldValue) {
      let goingUp = newValue > oldValue;
      if (goingUp) {                
        this.messageAlert = 'o tamanho da lista agora é '+this.linksList.unshift(`usuario/${newValue}`);
        setTimeout(()=>{this.messageAlert=''},1500)
      } else {
          this.messageAlert = 'o elemento removido da lista foi '+this.linksList.shift();
          setTimeout(()=>{this.messageAlert=''},4500)
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
.msgAlert{
    background: wheat;
    font-size: 20px;
    color: black;
    padding:1% 8%;
    border-radius: 40px;
    min-width: 200px;

}
input[type="range"] {
  border: 4px solid red;
  transform: rotate(-90deg);
  margin-top: 50%;
}
@keyframes ffp-in {
    from{ transform: rotateX(0deg); }
    to{transform: rotateX(90deg); }
}
@keyframes ffp-out {
    from{transform: rotateX(90deg); }
    to{transform: rotateX(0deg); }
}
.flipflop-enter-active{
    animation:ffp-in 2s ease;

}
.flipflop-leave-active{
    animation:ffp-out 2s ease;
}
</style>