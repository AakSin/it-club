<template>
  <div class="c_container">
    <h1 class="display-4 text-center">The f(x) Club and Turing</h1>
    <hr class="my-4" />
    <p class="lead px-5 text-center">
     Alan Turing proposed to consider the question “can machines think?” <br><br>
Today we say that they can and the possibilities only grow exponentially. 

Welcome to the f(x) club where we inspire innovation.  
Established in 2019, f(x) was founded by just a bunch of driven students fascinated with technology and computer sciences. Despite the pandemic, we bring to you the Turing event which gives you all a massive opportunity to showcase your technical skills and IT knowledge on a prestigious platform at LVIS Noida. 

At f(x), in a tech- driven world ,we wish to create an environment where students may explore the infinite possibilities in the enigmatic world of information technology. 
<br>
See you at Turing!
    </p>

    <h1 class="display-4 text-center">Founders</h1>
    <hr class="my-4" />
    <div class="row d-flex align-items-center">
      <div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2" data-aos="flip-up">
        <div class="card text-center">
          <img
            class="card-img-top "
            src="../../../public/static/imgs/turingaakarsh.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h1 class="card-title">Aakarsh Singh</h1>
            <h2>Web Development Head</h2>
            <!-- <p>I created this website and I will be heading Web Development.</p> -->
            <a href="mailto:aakarsh@lvisturing.tech" class="fa fa-envelope"></a>
            <a
              href="https://www.instagram.com/aaksins/"
              class="fa fa-instagram"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2" data-aos="flip-up">
        <div class="card text-center">
          <img
            class="card-img-top "
            src="../../../public/static/imgs/turingsayak.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h1 class="card-title">Sayak Ray</h1>
            <h2>Coding Head</h2>
            <!-- <p>I created the teaser and I will be heading coding.</p> -->
            <a
              href="mailto:sr.official3210@gmail.com"
              class="fa fa-envelope"
            ></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2" data-aos="flip-up">
        <div class="card text-center">
          <img
            class="card-img-top "
            src="../../../public/static/imgs/turinghardit.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h1 class="card-title">Hardit Singh</h1>
            <h2>Photoshop Head</h2>
            <!-- <p>I created the brochure and I will be heading Photoshop</p> -->
            <a href="mailto:hardits925@gmail.com" class="fa fa-envelope"></a>
            <a
              href="https://www.instagram.com/hardy_1273/"
              class="fa fa-instagram"
              target="_blank"
            ></a>
            <a href="tel:8076252192" class="fa fa-phone"></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 p-4 p-md-2" data-aos="flip-up">
        <div class="card text-center">
          <img
            class="card-img-top "
            src="../../../public/static/imgs/turingishan.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h1 class="card-title">Ishan Maheshwari</h1>
            <h2>Disquisition Head</h2>
            <!-- <p>I created the brochure and I will be heading Disquisition</p> -->
            <a href="mailto:ishan.arw@gmail.com" class="fa fa-envelope"></a>
            <a
              href="https://www.instagram.com/ishan.pma"
              class="fa fa-instagram"
              target="_blank"
            ></a>
            <a href="tel:8130314810" class="fa fa-phone"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
<style lang="scss" scoped>
.c_container {
  padding: 0 5vw;
}

.lead{
   font-size: 2.2rem;
  @media #{$md} {
    font-size: 1.25rem;
  }
}

.btn,
p {
  font-size: 2rem;
  @media #{$md} {
    font-size: 1rem;
  }
}
.card {
  background-color: rgba(0, 0, 0, 0.39);
  margin-bottom: 2vh;
  transition: 0.5s;
  cursor:pointer;
  h1,
a {
  font-size: 3rem;
  @media #{$md} {
    font-size: 1.5rem;
  }
}
h2 {
  font-size: 2.5rem;
  @media #{$md} {
    font-size: 1.25rem;
  }
}
  
}
.card:hover {
  box-shadow: 3px 3px 20px #dbdbdb2a;
  background-color: rgb(26, 26, 26);
  transform: translate(1.05);
  transition: 0.5s;
}

hr {
  background-color: rgba(255, 255, 255, 0.3);
}
img{
   width: 100%;
    height: 600px;
    object-fit: cover;
}
</style>
