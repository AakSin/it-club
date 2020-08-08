<template>
  <div class="c_container">
    <div class="row d-flex align-items-center">
      <Event
        v-for="event in events"
        v-bind:key="event.name"
        v-bind:event="event"
      />
    </div>
  </div>
</template>
<script>
import Event from "./Event.vue";
export default {
  name: "EventsGrid",
  components: { Event },
  data() {
    return {
      events: [
        {
          name: "Web Development",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        },  {
          name: "Web D",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        },  {
          name: "Web D",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        },  {
          name: "Web D",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "./static/svgs/webd.svg",
          desc: "lorem ipsum",
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.c_container{
  padding: 0 5vw;
}
</style>
