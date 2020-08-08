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
    
    <div class="py-4 rter  d-flex flex-column justify-content-center"><router-view ></router-view></div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">

html {
    background:$bcolor;
    min-height: 100vh;
    overflow-x:hidden;
    @media #{$xs} { font-size: 8px; }
    @media #{$sm} { body { font-size: 12px; } }
    @media #{$md} { body { font-size: 16px; } }
    @media #{$lg} { body { font-size: 18px; } }
    @media #{$xl} { body { font-size: 20px; } }
}
#app{
  min-height:100vh;
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
      (random(90) * 1vw),
      (random(90) * 1vh),
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
  min-height:93vh;
}
</style>
