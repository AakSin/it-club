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
Class: Open <br>
Software to be used: Microsoft Visual Studio Code <br>
Topic:	Participants will have to solve an online python problem set in the allotted time.
          `,
          ttel: "9711724852",
          tname:"Ms. Neha Gupta",
          stel:"7011465224",
          sname:"Aakarsh Singh"
        },
        {
          name: "Coding",
          image: "./static/svgs/coding.svg",
          desc: `
No. of Participants-2<br>
No. of teams – 1 <br>
Class: Open <br>
Software to be used: IDLE 3.8<br>
Topic - Participants will have to solve an online python problem set in the allotted time.
          `,
          ttel: "9891391086",
          tname:"Mr. Anshuman Sharma",
          stel:"8826490227",
          sname:"Sayak Ray"
        },
        {
          name: "Gaming",
          image: "./static/svgs/gaming.svg",
          desc: `
          No. of Participants - 2 for each game <br>
          Class: Open <br>
          Games: Rocket League, Brawlhalla
          `,
          ttel: "9818080696",
          tname:"Ms. Parul Kapil",
          stel:"8800775011",
          sname:"Aarav Mittal"
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
          stel:"8076252192",
          sname:"Hardit Singh"
        },
        {
          name: "Disquisition",
          image: "./static/svgs/dq.svg",
          desc: `
          
          No. of teams per school - 2 <br>
No. of participants per team – 1 <br>
Class: Open <br>
Topic: The ethics of digital surveillance and big data.`,
          ttel: "9818080696",
          tname:"Ms. Parul Kapil",
          sname:"Ishan Maheshwari",
          stel:"8130314810"
        },

        {
          name: "Minecraft",
          image: "./static/svgs/minecraft.svg",
          desc: `
          No. of Participants-2 <br>
Number of teams - 1 <br>
Class : VI-VIII <br>
Software to be used: Minecraft Java Edition Version 1.16.1 <br>
Topic - Participants will need to build a base in the game with functioning Redstone contraptions, the building style, and the type of Redstone contraption is up to the participant. The build must be in Creative mode.
          `,
          ttel:"9818233557",
          tname:"Ms. Srinidhi Chaudhary",
          sname:"Yash Srivastava",
          stel:"7710941630"
        },
        {
          name: "Presentation",
          image: "./static/svgs/presentation.svg",
          desc: `
          No. of Participants-2  <br>
No. of teams-1 <br>
Software to be used: Microsoft Sway <br>
Topic - A technological innovation that would help people in the lockdown
          
          `,
          ttel:"9711724852",
          tname:"Ms. Ruchi Sharma",
          sname:"Ishaan Khurana",
          stel:"7678170515"
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
