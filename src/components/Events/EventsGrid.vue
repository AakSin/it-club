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
          desc: `No. of Participants: 2 <br>
No. of teams: 1 <br>
Class: IX-XII <br>
Software to be used: Microsoft Visual Studio Code <br>
Topic: Participants will need to create a single page vertical scroll portfolio for Alan Turing as if he was a job seeker in our current times.
          `,
          ttel: "9711724852",
          tname:"Ms. Neha Gupta",
          
          sname:"Aakarsh Singh"
        },
        {
          name: "Coding",
          image: "./static/svgs/coding.svg",
          desc: `
No. of Participants: 1<br>
No. of teams: 1 <br>
Class: XI-XII <br>
Software to be used: IDLE 3.8<br>
Topic - Participants will have to solve an online python problem set in the allotted time.
          `,
          ttel: "9891391086",
          tname:"Mr. Anshuman Sharma",
         
          sname:"Sayak Ray"
        },
        {
          name: "Gaming",
          image: "./static/svgs/gaming.svg",
          desc: `
          No. of Participants: 2 for each game <br>
          Class: Open <br>
          Games: Rocket League, Brawlhalla
          `,
          ttel: "9818080696",
          tname:"Ms. Parul Kapil",
         
          sname:"Aarav Mittal",
          
          sname2:"Aaditya Gaur"
        },
        {
          name: "Photoshop",
          image: "./static/svgs/photoshop.svg",
          desc: `
                    No. of Participants: 2 <br>
No.of Teams: 1 <br>
Class: IX-X <br>
Software to be used: Adobe Photoshop <br>
Topic: Poster for an esports(or sports) event/Music Album cover
          `,
          ttel: "9999516311",
          tname:"Ms. Shipra Kalra",
          
          sname:"Hardit Singh"
        },
        {
          name: "Disquisition",
          image: "./static/svgs/dq.svg",
          desc: `
          
          No. of teams per school: 1 <br>
No. of participants per team: 1 <br>
Class: XI-XII <br>
Topic: The ethics of digital surveillance and big data.`,
          ttel: "9818080696",
          tname:"Ms. Parul Kapil",
          sname:"Ishan Maheshwari",
         
          sname2:"Milika Nayak",
          
        },

        {
          name: "Minecraft",
          image: "./static/svgs/minecraft.svg",
          desc: `
          No. of Participants: 1 <br>
Number of teams: 1 <br>
Class : VI-VIII <br>
Software to be used: Minecraft Java Edition Version 1.16.1 <br>
Topic: Participants will need to build a base in the game with functioning Redstone contraptions, the building style, and the type of Redstone contraption is up to the participant. The build must be in Creative mode. <br>
<a href="https://drive.google.com/u/1/uc?id=1HIypRu5HGERBT_H4nvqyi_hbsV1_HZVr&export=download" target="_blank">Link for Minecraft World.</a>
          `,
          ttel:"9354590596",
          tname:"Ms. Srinidhi Chaudhary",
          sname:"Yash Srivastava",
         
        },
        {
          name: "Presentation",
          image: "./static/svgs/presentation.svg",
          desc: `
          No. of Participants: 2  <br>
         Class: VI-VIII  <br>
No. of teams: 1 <br>
Software to be used: Microsoft Sway <br>
Topic: A technological innovation that would help people in the lockdown
          
          `,
          ttel:"9711724852",
          tname:"Ms. Ruchi Sharma",
          sname:"Tanvi Sardana",
         
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.c_container {
  padding: 0 5vw;
}
</style>
