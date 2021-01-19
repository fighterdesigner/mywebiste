<template>
  <div id="app">
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>
<script>
    
    import TheHeader from "@/components/global/TheHeader.vue";
    import TheFooter from "@/components/global/TheFooter.vue";
    
export default {
    name: "App",
    components: {
        TheHeader,
        TheFooter
    }
    
    }   
  
</script>

<style>

::-webkit-scrollbar {
	width: 6px
}
::-webkit-scrollbar-thumb {
	background-color: #1565C0
}    
    
</style>
