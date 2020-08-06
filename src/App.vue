<template>
  <div id="app">
    <Nav></Nav>
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
    </div>
    <router-view></router-view>
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
    min-height: 100vh;
    @media #{$xs} { font-size: 8px; }
    @media #{$sm} { body { font-size: 12px; } }
    @media #{$md} { body { font-size: 16px; } }
    @media #{$lg} { body { font-size: 18px; } }
    @media #{$xl} { body { font-size: 20px; } }
}
#particle-container{
  overflow:hidden;
}
.particle {
  position: absolute;
  border-radius: 50%;
}

@for $i from 1 through 35 {
  @keyframes particle-animation-#{$i} {
    100% {
      transform: translate3d(
        (random(90) * 1vw),
        (random(90) * 1vh),
        (random(100) * 1px)
      );
    }
  }

  .particle:nth-child(#{$i}) {
    animation: particle-animation-#{$i} 30s infinite;
    $size: random(2) + vw;
    opacity: random(100) / 100;
    height: $size;
    width: $size;
    animation-delay: -$i * 0.2s;
    transform: translate3d(
      (random(90) * 1vw),
      (random(90) * 1vh),
      (random(100) * 1px)
    );
    background: hsl(random(360), 70%, 50%);
  }
}
</style>
