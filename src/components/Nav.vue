<template>
  <div>
    <!-- <nav class="d-flex my-3 justify-content-center align-items-center">
    <router-link class="mx-4 px-2" to="/" @click="changeTheme()" exact>Home</router-link>
    <router-link class="mx-4 px-2" to="/aboutus">About Us</router-link>
    <router-link class="mx-4 px-2" to="/events">Events</router-link>
    
    </nav> -->
    <div>
  <b-navbar class="mb-3 py-0 py-lg-4" toggleable="lg" type="dark" variant="info">
    

    <b-navbar-toggle class="ml-auto py-4 px-5" target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
     <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center w-100 ">
        <router-link class="mx-4 mb-3 mb-lg-0 px-2" to="/" @click="changeTheme()" exact>Home</router-link>
    <router-link class="mx-4 mb-3 mb-lg-0 px-2" to="/aboutus">About Us</router-link>
    <router-link class="mx-4 mb-3 mb-lg-0 px-2" to="/events">Events</router-link>
    <router-link class="mx-4 mb-3 mb-lg-0 px-2" to="/results">Results</router-link>
    <router-link class="mx-4 mb-3 mb-lg-0 px-2" to="/images">Images</router-link>
      </div>

    
    </b-collapse>
  </b-navbar>
</div>
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
.bg-info{
  width:100vw;
  
  background-color: rgba(0,0,0,0) !important;
}
.navbar{
  padding:0;
}
.navbar-collapse{
  background-color:rgba(0,0,0,0);
}
button:focus{
  outline:none;
}
.navbar-toggler{
  border:0;
  transform:scale(2) ;
  
}

</style>