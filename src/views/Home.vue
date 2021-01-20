<template>
  <div class="home">
      <h1>{{h1}}</h1>
      <p>{{p}}</p>
  </div>
</template>

<script>

    
export default {
  name: "Home",
    computed: {
        h1() {
            return this.$store.getters.testfunc[1].home.h1            
        },
        p() {
            return this.$store.getters.testfunc[1].home.p            
        }        
    }
};
</script>
