<template>
  <div>
    <h1>Home</h1>
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="30 100 300 300"><defs></defs><g id="turing-text"><text class="cls-1" transform="translate(40.12 138.96)">
      {{this.content}}
      </text></g><circle class="cls-2" cx="50.56" cy="160.66" r="10.44"/><circle class="cls-3" cx="50.56" cy="160.66" r="10.44"/><circle class="cls-2" cx="92.14" cy="160.66" r="10.44"/><circle class="cls-4" cx="92.14" cy="160.66" r="10.44"/><circle class="cls-2" cx="133.72" cy="160.66" r="10.44"/><circle class="cls-3" cx="133.72" cy="160.66" r="10.44"/><circle class="cls-2" cx="173.68" cy="160.66" r="10.44"/><circle class="cls-5" cx="173.68" cy="160.66" r="10.44"/><circle class="cls-2" cx="212.02" cy="160.66" r="10.44"/><circle class="cls-4" cx="212.02" cy="160.66" r="10.44"/><circle class="cls-2" cx="249.82" cy="160.66" r="10.44"/><circle class="cls-5" cx="249.82" cy="160.66" r="10.44"/><path class="cls-6" d="M51.14,165.16c5.63,9.9,14.61,20.39,26.12,23.26,7,1.76,13.59-1.16,18.94-5.61,4.41-3.68,8.66-8.43,14.75-8.83,7.19-.48,14.4,8.1,20.52,9.58,17.17,4.16,36.64-10.67,42.21-21.29"/><path class="cls-7" d="M133.72,163.81C142,178.44,163,196.13,180.21,183c15.52-11.87,23.08-9.71,38.6.37,20.25,13.16,27.81-14,31.55-22.68"/>
    <g id="rotate"><ellipse class="cls-8" cx="50.56" cy="161.5" rx="5.42" ry="5.55"/><rect class="cls-8" x="48.91" y="152.81" width="3.3" height="5.31"/></g><g id="rotate-2" data-name="rotate"><ellipse class="cls-8" cx="91.73" cy="161.11" rx="5.55" ry="5.42" transform="translate(-81.78 95.82) rotate(-39.72)"/><rect class="cls-8" x="92.69" y="155.57" width="5.31" height="3.3" transform="translate(-78.46 97.23) rotate(-39.72)"/></g><g id="rotate-3" data-name="rotate"><ellipse class="cls-8" cx="134.36" cy="161.92" rx="5.42" ry="5.55" transform="translate(-19.74 18.66) rotate(-7.4)"/><rect class="cls-8" x="131.8" y="153.69" width="3.3" height="5.31" transform="translate(-19.03 18.5) rotate(-7.4)"/></g><g id="rotate-4" data-name="rotate"><ellipse class="cls-8" cx="172.93" cy="161.72" rx="5.55" ry="5.42" transform="translate(-62.72 184.7) rotate(-48.65)"/><rect class="cls-8" x="174.02" y="155.92" width="5.31" height="3.3" transform="translate(-58.34 186.1) rotate(-48.65)"/></g><g id="rotate-5" data-name="rotate"><ellipse class="cls-8" cx="211.75" cy="162.27" rx="5.55" ry="5.42" transform="translate(36.99 363.83) rotate(-86.54)"/><rect class="cls-8" x="209.46" y="154.6" width="5.31" height="3.3" transform="translate(43.34 358.54) rotate(-86.54)"/></g><g id="rotate-6" data-name="rotate"><ellipse class="cls-8" cx="249.27" cy="162.9" rx="5.55" ry="5.42" transform="translate(7.61 336.89) rotate(-68.92)"/><rect class="cls-8" x="248.78" y="155.62" width="5.31" height="3.3" transform="translate(14.26 335.31) rotate(-68.92)"/></g>
    </svg>
  </div>
</template>
<script>
export default {
  mounted(){this.typewriter()},
  name:'Home',
  data(){
    return{
      content:"",
      final:"T U R I N G",
      i:0
    }
  },
  methods:{
    typewriter(){
      let self=this;
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    self.content=self.final.substring(0,self.i)   //  your code here
    self.i+=1;                    //  increment the counter
    if (self.i < 12) {           //  if the counter < 10, call the loop function
      self.typewriter();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 500)
}
    }
  }
</script>
<style lang="scss" scoped>
.cls-1{font-size:36.86px;fill:#3f220e;font-family:Gotham-Bold, Gotham;font-weight:700;letter-spacing:0.05em;}.cls-2{fill:#020202;}.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{fill:none;stroke-miterlimit:10;}.cls-3{stroke:#cc2727;}.cls-3,.cls-4,.cls-5{stroke-width:2px;}.cls-4{stroke:#6b6a69;}.cls-5{stroke:#d3bb0d;}.cls-6{stroke:#af866e;}.cls-6,.cls-7{stroke-width:4px;}.cls-7{stroke:#965f44;}.cls-8{fill:#fcfcfc;}

#rotate,#rotate-3,#rotate-4,#rotate-6{
  animation:rotate 1s infinite alternate;
  transform-box: fill-box;
  transform-origin: center;
}

@keyframes rotate{
   from{
transform: rotateZ(-10deg);
  }
  to{
    transform: rotateZ(10deg);
  }
 
}

</style>