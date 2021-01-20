<template>
  <div class="about">
    <h1>{{h1}}</h1>
    <p>{{p}}</p>
  </div>
</template>

<script>
export default {
    name: "About",
    computed: {
        h1() {
            return this.$store.getters.testfunc[2].about.h1            
        },
        p() {
            return this.$store.getters.testfunc[2].about.p            
        }        
    }    
}
</script>