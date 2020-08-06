<template>
<div class="col-12 col-sm-6 col-md-3">
   <div class="card">
      <img class="card-img-top" :src="event.image" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{event.name}}</h5>
        <p class="card-text">{{event.desc}}</p>
      </div>
    </div>
    </div>
</template>
<script>

export default {
  name:'Event',
  props:["event"]
 

}
</script>
<style lang="scss" scoped>

</style>