<template>
<div class="footer-compo">
 <div class="container">
<div class="row justify-content-center align-items-end text-center">
<nav class="navbar navbar-light">
			<ul class="col-md-6 col-xs-12 navbar-nav flex-row justify-content-between text-right">
		      <li class="nav-item">
		        <a target="_blank" class="nav-link" href="https://www.instagram.com/fighterdesigner">Instagram</a>
		      </li>
		      <li class="nav-item mx-4">
		        <a target="_blank" class="nav-link" href="https://www.facebook.com/fighterdesigner">Facebook</a>
		      </li>
		      <li class="nav-item">
		        <a target="_blank" class="nav-link" href="https://www.twitter.com/FighterDesigner">Twitter</a>
		      </li>                        
		    </ul>
</nav>
 <p class="col-md-6 col-xs-12 text-muted"><i class="fas fa-copyright"></i> All Rights reserved Fighter Designer</p>
<span @click="scrollToTop" id="totop-btn" class="btn border position-fixed"><i class="fas fa-arrow-up"></i></span>    
</div>
</div>   
</div>
</template>

<script>
            
export default {
    
    name: "TheFooter",
    data: function() {
      
        return {
            bolian: false
        }
        
    },
    methods: {
        
        scrollToTop: function() {
            
         window.scrollTo({top: 0, behavior: 'smooth' });
            
            
        }
    }

}
</script>

<style>
    
#totop-btn {
	bottom: 15px;
	right: 15px;
	background-color: #1565C0;
	color: white;
}   
    
</style>
