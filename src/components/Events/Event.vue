<template>
<div class="col-12 col-md-6 col-xl-3 p-4 p-md-2"  data-aos="fade-right" data-aos-duration="500" >
   <div class="card text-center" >
      <div v-if="readMore">
      <img class="card-img-top p-5 p-md-3 " :src="event.image" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title py-2">{{event.name}}</h1>
        <button class="btn btn-primary" @click="toggleRead()">Read More</button>
      </div>
      </div>
      <div class="p-2" id="details" v-else>
        <button class="btn btn-danger m-2" @click="toggleRead()"><i class="fa fa-times"></i></button>
        <p v-html="event.desc" class="lead px-4 "></p>
        <p>Teacher Incharge : {{event.tname}}<a :href="'tel:'+event.ttel" class="fa fa-phone"></a></p>
        <p>Student Incharge : {{event.sname}}<a :href="'tel:'+event.stel" class="fa fa-phone"></a></p>
      </div>
    </div>
    </div>
</template>
<script>

export default {
  name:'Event',
  props:["event"],
  data(){
    return{
      readMore:true
    }
  },
  methods:{
    toggleRead(){
      this.readMore=!this.readMore
    }
    
  }

}
</script>
<style lang="scss" scoped>
h1{
  font-size:3rem;
  @media #{$md}{
    font-size:1.5rem;
  }
}
.btn,p{
font-size:2rem;
  @media #{$md}{
    font-size:0.9rem;
  }
}
.card{

  background-color:rgba(0, 0, 0, 0.39);
  margin-bottom: 2vh;
  transition:0.5s;
  border:0.5px rgba(255, 255, 255, 0.103) solid;
  .fa{
    margin:0 10px;
  }
}
.card:hover{
  box-shadow: 3px 3px 20px #dbdbdb2a;
  background-color:rgb(26, 26, 26);
  transform:scale(1.05);
  transition:0.5s;
  cursor:pointer;
}
.card-body{
  h1{
    border-bottom:0.5px rgba(255, 255, 255, 0.103) solid;
  }
 
}
 img{
    object-fit: contain;
    width:100%;
    height:250px;
  }

</style>