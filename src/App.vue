<template>
  <div id="app">
    <div id="particle-container">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
    <Nav></Nav>
    
    <div class="rter d-flex flex-column justify-content-center"><router-view ></router-view></div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  mounted(){
    this.makeToast();
  },
  name: 'App',
  components: {
    Nav
  },
  data(){
    return{
      toastMessage:["8:20 PM 15th August- Rubrics updated. Please download brochure.",]
    }
  },
  methods:{
    makeToast() {
        for (let i=0;i<this.toastMessage.length;i++){
        this.$bvToast.toast(this.toastMessage[i], {
          title: 'Event Updates',
          appendToast: false,
          variant:"info",
          noAutoHide:true,
          toastClass:"increase"
        })
        }
  }
  }
}
</script>

<style lang="scss">

html,body {
    background:$bcolor;
    min-height: 100vh;
    overflow-x:hidden;
    @media #{$xs} { font-size: 8px; }
    @media #{$sm} { font-size: 10px; }
    @media #{$md} { font-size: 16px; }
    @media #{$lg} { font-size: 18px; }
    @media #{$xl} { font-size: 20px; }
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #646464; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #555;  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22); 
}
#app{
  min-height:100vh;
  width:100vw;
}
#particle-container{
  overflow:hidden;
}
.particle {
  position: absolute;
  border-radius: 50%;
}

@for $i from 1 through 50 {
  @keyframes particle-animation-#{$i} {
    100% {
      transform: translate3d(
        (random(95) * 1vw),
        (random(95) * 1vh),
        (random(100) * 1px)
      );
    }
  }

  .particle:nth-child(#{$i}) {
    animation: particle-animation-#{$i} 30s infinite;
    $size: random(10) + px;
    @media #{$md}{
      $nsize:random(20) + px;
      height: $nsize;
    width: $nsize;
    }
    opacity: random(100) / 100;
    height: $size;
    width: $size;
    animation-delay: -$i * 0.2s;
    transform: translate3d(
      (random(95) * 1vw),
      (random(95) * 1vh),
      (random(100) * 1px)
    );
    background: hsl(random(360), 80%, 60%);
  }
}
#app{
  background:$bcolor;
  color:$tcolor;
}
.rter{
  min-height:90vh;
}
.fa {
  text-decoration: none;
  margin: 2vw 2vw;
  @media #{$md} {
    margin: 0vw 1vw;
  }
 
}
 a:hover{
    text-decoration: none;

  }
  .display-4 {
  font-size: 3rem;
  @media #{$lg}{
    font-size:2.5rem;
  }
  font-family:'Raleway',sans-serif;
}
.increase{
  font-size:2rem;
  @media #{$md}{
    font-size:1rem;
  }
}
</style>
