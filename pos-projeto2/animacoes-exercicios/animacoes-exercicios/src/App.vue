<template>
  <div id="app" class="container-fluid">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <h1>Animações</h1>
    <b-button variant="primary" @click="alertMe = !alertMe">alternar alert</b-button>
   

   <!-- name="chosenAnimate"  tem prioridade sobre enter-leave --> 
    <transition      
      enter-active-class="animated shake"
      enter-leave-class="animated shake"
      appear
      ><div>
        <input list="animationsListHtmlTag" v-model="chosenAnimate" 
         ref="datainputref" />
        <datalist id="animationsListHtmlTag">
          <option
            v-for="animation of animations"
            :key="animation"
            :value="animation"      >
            {{ animation }}
          </option>
        </datalist>
      </div>
    </transition>
<!-- hooks js css enter,beforeEnter,before leave tem prioridade sobre enter-active -->
    <transition    
      enter-active-class="animated shake"       
      :name="chosenAnimate"    
      appear
    >
      <b-alert variant="info" show v-if="alertMe" key="info">quanto tempo</b-alert>
      <b-alert variant="warning" show v-else>oi sumido</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alertMe: false,
      animations: ["coolslide", "fade"],
      chosenAnimate: "fade", 
    };
  },
  methods:{
    enterInputCSS(el,done){
      console.log('alerta entrando,sobrescrevendo enteractive')
      done()
    }
  },
  mounted(){
    this.$refs.datainputref.focus() 
  }
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
</style>
