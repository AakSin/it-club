<template>
  <div class="row">
       <Event
        v-for="event in events"
        v-bind:key="event.name"
        v-bind:event="event"
        />
  </div>
</template>
<script>
import Event from './Event.vue'
export default {
  name:'EventsGrid',
  components:{Event},
  data(){
    return{
      events:[{
      name:"Web D",
      image:"@/svgs/webd.svg",
      desc:"lorem ipsum"
},
{
      name:"Coding",
      image:"#",
      desc:"lorem ipsum"
}
]
    }
  }

}
</script>
<style lang="scss" scoped>

</style>