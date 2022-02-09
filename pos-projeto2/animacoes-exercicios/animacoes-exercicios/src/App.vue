<template>
  <div id="app" class="container-fluid">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <transition :name="chosenAnimate" appear>
      <h1 v-if="!alertMe">Animações</h1>
    </transition>
    <b-button variant="primary" @click="alertMe = !alertMe"
      >alternar alert</b-button
    >

    <!--  @enterhooks >>>> enter-leave >>> name="chosenAnimate"   -->
    <transition
      class="input"
      enter-active-class="animated shake"
      enter-leave-class="animated shake"
      @enter="enterInputCSS"
      name="coolslide"
      mode="out-in"
      appear
    >
      <component
        :is="actualComponent"
        v-model="chosenAnimate"
        :animations="animations"      />
    </transition>
    <p>componente logo abaixo</p>

    <div class="bug d-none" v-if="false">
      <InputData v-model="chosenAnimate" :animations="animations" />
      <Combobox v-model="chosenAnimate" :animations="animations" />
    </div>

    <transition appear :name="chosenAnimate" v-if="alertMe">
      <div>
        <b-alert variant="warning" show key="nada">oi sumido</b-alert>
      </div>
    </transition>
  </div>
</template>

<script>
import Combobox from "./Combobox.vue";
import InputData from "./InputData.vue";
export default {
  components: { InputData, Combobox },
  data() {
    return {
      alertMe: false,
      animations: ["coolslide", "fade", "coolthrow"],
      chosenAnimate: "coolslide",
      chosenAnimateNotify: "coolslide",
      actualComponent: "InputData",
    };
  },
  watch: {
    alertMe() {
      console.log("mudei");
      this.actualComponent =
        this.actualComponent === "InputData" ? "Combobox"
        : "InputData";
    },
  },
  methods: {
    enterInputCSS(el, done) {
      console.log("alerta entrando,sobrescrevendo enteractive");
      el.style.position = "fixed";
      let valor = 100;
      setInterval(() => {
        el.style.bottom = `${valor}%`;
        valor--;
        if (valor < 70) {
          el.style.position = "static";
          clearInterval();
        }
      }, 100);

      done();
    },
    changeNotificationAnimation() {
      this.alertMe = !this.alertMe;
      this.chosenAnimateNotify = "coolthrow";
    },
  },
  mounted() {
    //this.$refs.datainputref.focus();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter-to {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 2s;
}
.fade-leave-to {
  opacity: 0;
}

@keyframes slidingsoftly {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slidingsoftly-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}
.coolslide-enter-active {
  animation: slidingsoftly 2s ease;
}
.coolslide-leave-active {
  animation: slidingsoftly-out 2s ease;
}

@keyframes throwaway {
  from {
    transform: translateX(40%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes throwaway-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(40%);
  }
}
.coolthrow-enter-active {
  animation: throwaway 2s ease;
}
.coolthrow-leave-active {
  animation: throwaway-out 2s ease;
}
</style>
