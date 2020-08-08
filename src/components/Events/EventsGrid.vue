<template>
  <div class="container">
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
          name: "Web D",
          image: "@/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "#",
          desc: "lorem ipsum",
        },  {
          name: "Web D",
          image: "@/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "#",
          desc: "lorem ipsum",
        },  {
          name: "Web D",
          image: "@/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "#",
          desc: "lorem ipsum",
        },  {
          name: "Web D",
          image: "@/svgs/webd.svg",
          desc: "lorem ipsum",
        },
        {
          name: "Coding",
          image: "#",
          desc: "lorem ipsum",
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
