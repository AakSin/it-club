<template>
<div class="col-12 col-sm-6 col-lg-3 px-5 px-md-2">
   <div class="card text-center">
      <div v-if="readMore">
      <img class="card-img-top px-5 px-md-3" src="@/svgs/webd.svg" alt="Card image cap" />
      <div class="card-body">
        <h1 class="card-title">{{event.name}}</h1>
        <button class="btn btn-primary" @click="toggleRead()">Read More</button>
      </div>
      </div>
      <div class="p-2" v-else>
        <button class="btn btn-danger" @click="toggleRead()">X</button>
        <p>{{event.desc}}</p>
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

.card{
  background-color:rgba(0,0,0,0);
  margin-bottom: 2vh;

}
</style>