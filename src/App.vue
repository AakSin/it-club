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
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';


export default {
  mounted(){
    this.makeToast();
  },
  name: 'App',
  components: {
    Nav,Footer
  },
  data(){
    return{
      toastMessage:["8:00 PM 17th August- Coding and Gaming will be held on 31st August from 2:30 PM to 4:30 PM.",
      "12:20 PM 25th August- The email ID for Disquisition (Group Disc.) is caesarfx.cipher@gmail.com. Minecraft link has been provided on the website.",
      "8:30 PM 28th August - The link to the Discord server for gaming and for the Hackerrank contest for coding have been shared with the teachers on mail. The teachers may forward this to the students particiapting in these events."]
    }
  },
  methods:{
    makeToast() {
        for (let i=0;i<this.toastMessage.length;i++){
        this.$bvToast.toast(this.toastMessage[i], {
          title: 'Event Updates',
          appendToast: false,
          toaster:"b-toaster-bottom-right",
          variant:"info",
          noAutoHide:true,
          toastClass:"increase mb-3 mr-3"
        })
        }
  }
  }
}
</script>

<style lang="scss">

html,body {
    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background:$bcolor;
    background-image: radial-gradient(circle at 100% 100%, #38406b, #1e2135 81%, #1c1e2f);
    background-size:150% 150%;
    animation: gradient 10s ease infinite;
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
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.424);
}
@keyframes gradient {
	0% {
		background-position: 0% 0%;
	}
	50% {
		background-position: 100% 100%;
	}
	100% {
		background-position: 0% 0%;
	}
}

</style>
