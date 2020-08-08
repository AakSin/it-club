<template>
<div class="col-12 col-md-6 col-lg-3 p-4 p-md-2">
   <div class="card text-center">
      <div v-if="readMore">
      <img class="card-img-top p-5 p-md-3" :src="event.image" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title py-2">{{event.name}}</h1>
        <button class="btn btn-primary" @click="toggleRead()">Read More</button>
      </div>
      </div>
      <div class="p-2" v-else>
        <button class="btn btn-danger m-2" @click="toggleRead()"><i class="fa fa-times"></i></button>
        <p class="lead px-4">{{event.desc}}</p>
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
    font-size:1rem;
  }
}
.card{
  background-color:rgba(0,0,0,0);
  margin-bottom: 2vh;
  transition:0.5s;
   
}
.card:hover{
  background-color:rgba(197, 197, 197, 0.3);
  transform:scale(1.05);
  transition:0.5s;
  cursor:pointer;
}
.card-body{
  h1{
    border-bottom:0.5px rgba(0, 0, 0, 0.103) solid;
  }
}
</style>