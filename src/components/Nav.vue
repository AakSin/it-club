<template>
  <div>
    <nav class="d-flex justify-content-center align-items-center">
    <router-link class="px-4" to="/">Home</router-link>
    <router-link class="px-4" to="/aboutus">About Us</router-link>
    <router-link class="px-4" to="/events">Events</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  a{
    color:black;
    font-size:2rem;
    @media #{$md}{
      font-size:1.5rem;
    }
    text-transform:uppercase;
    letter-spacing:2px;
    font-weight: 200;
  }
nav{
  width:100vw;
  height:7vh;
}
</style>