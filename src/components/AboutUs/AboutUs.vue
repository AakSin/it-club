<template>
<div class="c_container">
  <h1 class="display-4 text-center">Why was this club started?</h1>
  <hr class="my-4">
  <p class="lead px-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum imperdiet. Maecenas vel leo a elit ullamcorper gravida.

Etiam turpis tellus, dapibus a quam quis, molestie vulputate sem. Ut ut faucibus ex. Pellentesque sit amet mi maximus, pharetra augue eu, sollicitudin neque. Cras imperdiet vehicula vestibulum. Mauris in eleifend arcu. Donec a porta justo. Sed maximus bibendum lacus in lacinia. Donec ante diam, sagittis id eleifend ac, blandit at magna. In malesuada nulla at fermentum pretium. Duis non metus magna.</p>
<div class="row d-flex align-items-center">
<div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2">
   <div class="card text-center">
      
      <img class="card-img-top " src="../../../public/static/imgs/no-img.png" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title">Aakarsh Singh</h1>
        <h2 >Founder </h2>
        <p>Info</p>
        <a href="mailto:aakarsh@lvisturing.tech" class="fa fa-envelope"></a>
  <a href="https://www.instagram.com/aaksins/" class="fa fa-instagram" target="_blank"></a>
      </div>
    </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2">
   <div class="card text-center">
      
      <img class="card-img-top " src="../../../public/static/imgs/no-img.png" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title">Sayak Ray</h1>
        <h2 >Founder </h2>
        <p>Info</p>
        <a href="#" class="fa fa-envelope"></a>
  <a href="#" class="fa fa-instagram"></a>
      </div>
    </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2">
   <div class="card text-center">
      
      <img class="card-img-top " src="../../../public/static/imgs/no-img.png" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title">Hardit Singh</h1>
        <h2 >Founder </h2>
        <p>Info</p>
        <a href="#" class="fa fa-envelope"></a>
  <a href="#" class="fa fa-instagram"></a>
      </div>
    </div>
    </div>
    <div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2">
   <div class="card text-center">
      
      <img class="card-img-top " src="../../../public/static/imgs/no-img.png" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title">Ishan Maheshwari</h1>
        <h2 >Founder </h2>
        <p>Info</p>
        <a href="mailto:ishan.arw@gmail.com" class="fa fa-envelope"></a>
  <a href="https://www.instagram.com/ishan.pma" class="fa fa-instagram" target="_blank"></a>
      </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name:'AboutUs'
}
</script>
<style lang="scss" scoped>
.c_container{
  padding: 0 5vw;
}
h1,a{
  font-size:3rem;
  @media #{$md}{
    font-size:1.5rem;
  }
}
h2{
  font-size:2.5rem;
  @media #{$md}{
    font-size:1.25rem;
  }
}
.btn,p{
font-size:2rem;
  @media #{$md}{
    font-size:1rem;
  }
}
.card{
  background-color:rgba(0, 0, 0, 0.39);
  margin-bottom: 2vh;
  transition:0.5s;
   
}
.card:hover{
  box-shadow: 3px 3px 20px #dbdbdb2a;
  background-color:rgb(26, 26, 26);
  transform:translate(1.05);
  transition:0.5s;
}
.fa{
  text-decoration: none;
  margin:2vw 2vw;
  @media #{$md}{
    margin:0vw 1vw;
  }
}
hr{
  background-color:$tcolor;
}
</style>