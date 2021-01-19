<template>
<div class="header">
  <nav class="navbar navbar-expand-sm navbar-light text-black-50">
		<div class="container">
		  <img id="navbar-brand" src="../../assets/imgs/icon.png">
            
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="true" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="navbar-collapse text-center font-weight-2 collapse" id="navbarsExample02">
		    <ul class="navbar-nav ml-auto">
		      <li @click="hide_me()" class="nav-item">
		        <router-link class="nav-link" to="/" exact>About Me</router-link>
		      </li>
		      <li @click="hide_me()" class="nav-item">
		        <router-link class="nav-link" to="/resume">Resume</router-link>
		      </li>
		      <li @click="hide_me()" class="nav-item">
		        <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
		      </li>
		      <li @click="hide_me()" class="nav-item">
		        <router-link class="nav-link" to="/contact">Contact</router-link>
		      </li>                            
		    </ul>
		  </div>
  		</div>
</nav>
</div>
</template>

<script>

    export default {
        name: "Nave",
        methods: {
            hide_me: function(){
                
                var div = document.getElementById("navbarsExample02");
                div.classList.remove("show");
                
                return true;
            }
        }
    }

</script>

<style scoped lang="scss">
    
    .router-link-active {
        border-bottom: 2px solid #1565C0 !important;
        color: #1565C0 !important;
        font-weight: 500
    }

    nav {
        box-shadow: 0 2px 16px rgba(0,0,0,.1)
    }
    #navbar-brand {
	width: 60px
}
    
</style>
