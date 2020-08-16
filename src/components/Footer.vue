<template>
    <div>
<footer class="py-4 py-md-3"><a href="https://github.com/AakSin" target="_blank">Made by Aakarsh Singh</a></footer>
    </div>
</template>
<script>
export default {
    name:"Footer"
}
</script>
<style lang="scss" scoped>
footer{
  
  background-color: rgba(0, 0, 0, 0.493);
  width:100vw;
  text-transform: uppercase;
  font-family: Raleway;
  font-weight:200;
  letter-spacing:0.5vw;
  text-align:center;
  font-size:1.5rem;
  @media #{$md}{
      font-size:1rem;
  }
}
a{
    color: $tcolor;
}
</style>