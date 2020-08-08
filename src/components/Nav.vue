<template>
  <div>
    <nav class="d-flex my-3 justify-content-center align-items-center">
    <router-link class="mx-4 px-2" to="/" @click="changeTheme()" exact>Home</router-link>
    <router-link class="mx-4 px-2" to="/aboutus">About Us</router-link>
    <router-link class="mx-4 px-2" to="/events">Events</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name:"Nav"

}
</script>
<style lang="scss" scoped>
  a{
    color:$tcolor;
    font-size:2rem;
    font-weight:400;
    text-transform:uppercase;
    letter-spacing:2px;
     @media #{$md}{
      font-size:1.5rem;
      font-weight: 200;
    }
  }
a:hover, .router-link-active{
  text-decoration:none;
  border-bottom:1px $tcolor solid;
}
nav{
  width:100vw;
  height:7vh;
}
</style>