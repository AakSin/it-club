<template>
  <div class="c_container">
    <div class="row d-flex align-items-center justify-content-center">
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
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum ",
        },
        {
          name: "Coding",
          image: "./static/svgs/coding.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum ",
        },  {
          name: "Gaming",
          image: "./static/svgs/gaming.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum ",
        },
        {
          name: "Photoshop",
          image: "./static/svgs/photoshop.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum ",
        },  {
          name: "Disquisition",
          image: "./static/svgs/dq.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum ",
        },
        {
          name: "Minecraft",
          image: "./static/svgs/minecraft.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum ",
        },  {
          name: "Presentation",
          image: "./static/svgs/presentation.svg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien a sapien vehicula luctus at non lacus. Morbi ultricies leo in ligula pulvinar, et gravida lectus molestie. Etiam porta arcu et felis egestas malesuada. Maecenas euismod pharetra arcu, et aliquet enim vestibulum ut. Sed facilisis felis ac est porta, pellentesque malesuada ligula mollis. Mauris porta massa non condimentum ",
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
