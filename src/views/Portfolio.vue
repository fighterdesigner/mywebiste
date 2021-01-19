<template>
<div class="blog-page">

<Jambotron :jamTitle="Title" :jamDescription="Description"/>  

<div id="port-page" class="container my-4">
    
<h3 class="my-4 all-title font-weight-normal">Some of my work:</h3>    

	<div class="tab-content">

			<div id="container-of-work" class="work row justify-content-center">            
                
				<div @click="show_sec($event)" class="card m-1 col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="(div, index) in divels" :key="index" v-text="div"></div>
                
        
            </div>	
        
    <button class="btn col-6" @click="nextfunc()" :disabled="disa">See More</button>  
    
<!--        websites gallery-->
    
    <section v-if="showsec" id="gallery">
        
    <span @click="hide_section()" id="gallery-hide" class="btn-sm text-center shadow"><i class="fas fa-arrow-left"></i></span>
        
    <img :src="imgsrc">
    </section>

<!--        websites gallery-->        
                
	</div>

</div>
    
    
</div>
</template>

<script>

import Jambotron from "@/components/global/Jambotron.vue";
    
export default {
    data: function() {
        return {
        Title: "Portfolio",
        Description: "All types of businesses",
        disa: false,
        divels: ["","","","","",""],
        showsec: false,
        imgsrc: '',
        }
    },
    name: "Portfolio",
    components: {
        Jambotron,
    },
    methods: {
        nextfunc() {
             

            this.divels.push.apply(this.divels,["","","","","",""]);
            
            if(this.divels.length > 36 ) {
                this.disa = !this.disa
            }
        
            },
        hide_section() {
          this.showsec = !this.showsec  
        },
        show_sec(event) {  
            this.showsec = !this.showsec;
            
            const mydiv = event.currentTarget;
            
            const imgurl = window.getComputedStyle(mydiv).backgroundImage.replace('url("','').replace('")','');
            
            this.imgsrc = imgurl;
        }
        
    }
    }
    
</script>

<style scoped lang="scss">
    
    section {
        position: fixed;
        background-color: rgba(0,0,0,.8);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow-y: scroll;
        z-index: 999;
        
        span {
            
            position: fixed;
            top: 20px;
            left: 20px;
            background-color: #1565C0;
            color: white
                
        }
        img {
            width: 80%;
            margin: 100px auto 100px auto;
            display: block
        }
    }    
    
.tab-content {
    margin-top: 40px
}

.btn {
    display: block;
    margin: 40px auto 10px auto;
    background-color: #1565C0;
    color: white
}    
    .btn:hover {
        color: white !important
    } 
#port-page .tab-content .row > div {
	max-width: 200px;
	height: 200px;
	background-position: top;
	background-size: 100% auto;
	cursor: pointer;
	position: relative;
	transition: .3s
} 

#port-page .tab-content .row > div:nth-of-type(1) {
	background-image: url(../assets/imgs/10-business.png);
}
#port-page .tab-content .row > div:nth-of-type(2) {
	background-image: url(../assets/imgs/7-business.png);
}
#port-page .tab-content .row > div:nth-of-type(3) {
	background-image: url(../assets/imgs/8-business.png);
}
#port-page .tab-content .row > div:nth-of-type(4) {
	background-image: url(../assets/imgs/9-business.png)
}
#port-page .tab-content .row > div:nth-of-type(5) {
	background-image: url(../assets/imgs/1-travel.png);
}
#port-page .tab-content   .row > div:nth-of-type(6) {
	background-image: url(../assets/imgs/2-travel.png);
}
#port-page .tab-content .row > div:nth-of-type(7) {
	background-image: url(../assets/imgs/3-travel.png);
}
#port-page .tab-content .row > div:nth-of-type(8) {
	background-image: url(../assets/imgs/4-travel.png);
}
#port-page .tab-content .row > div:nth-of-type(9) {
	background-image: url(../assets/imgs/5-travel.png);
}
#port-page .tab-content .row > div:nth-of-type(10) {
	background-image: url(../assets/imgs/6-travel.png);
}
#port-page .tab-content  .row > div:nth-of-type(11) {
	background-image: url(../assets/imgs/11-photo.png);
}
#port-page .tab-content  .row > div:nth-of-type(12) {
	background-image: url(../assets/imgs/12-photo.png);
}
#port-page .tab-content  .row > div:nth-of-type(13) {
	background-image: url(../assets/imgs/13-photo.png);
}
#port-page .tab-content  .row > div:nth-of-type(14) {
	background-image: url(../assets/imgs/14-photo.png);
}
#port-page .tab-content  .row > div:nth-of-type(15) {
	background-image: url(../assets/imgs/15-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(16) {
		background-image: url(../assets/imgs/16-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(17) {
		background-image: url(../assets/imgs/17-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(18) {
		background-image: url(../assets/imgs/18-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(19) {
		background-image: url(../assets/imgs/19-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(20) {
		background-image: url(../assets/imgs/20-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(21) {
		background-image: url(../assets/imgs/21-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(22) {
		background-image: url(../assets/imgs/22-ecom.png);
}
#port-page .tab-content  .row > div:nth-of-type(23) {
		background-image: url(../assets/imgs/23-musi.png);
}
#port-page .tab-content  .row > div:nth-of-type(24) {
		background-image: url(../assets/imgs/24-musi.png);
}
#port-page .tab-content  .row > div:nth-of-type(25) {
		background-image: url(../assets/imgs/25-musi.png);
}
#port-page .tab-content  .row > div:nth-of-type(26) {
		background-image: url(../assets/imgs/26-musi.png);
}	
#port-page .tab-content  .row > div:nth-of-type(27) {
		background-image: url(../assets/imgs/27-app.png);
}
#port-page .tab-content  .row > div:nth-of-type(28) {
		background-image: url(../assets/imgs/28-app.png);
}
#port-page .tab-content  .row > div:nth-of-type(29) {
		background-image: url(../assets/imgs/29-app.png);
}
#port-page .tab-content  .row > div:nth-of-type(30) {
		background-image: url(../assets/imgs/30-app.png);
}
#port-page .tab-content  .row > div:nth-of-type(31) {
		background-image: url(../assets/imgs/34-furni.png);	
}
#port-page .tab-content  .row > div:nth-of-type(32) {
		background-image: url(../assets/imgs/35-furni.png);		
}
#port-page .tab-content  .row > div:nth-of-type(33) {
		background-image: url(../assets/imgs/36-furni.png);		
}
#port-page .tab-content  .row > div:nth-of-type(34) {
		background-image: url(../assets/imgs/37-furni.png);		
}
#port-page .tab-content  .row > div:nth-of-type(35) {
		background-image: url(../assets/imgs/31-real.png);	
}
#port-page .tab-content  .row > div:nth-of-type(36) {
		background-image: url(../assets/imgs/32-real.png);		
}
#port-page .tab-content  .row > div:nth-of-type(37) {
		background-image: url(../assets/imgs/33-real.png);	
}
#port-page .tab-content  .row > div:nth-of-type(38) {
		background-image: url(../assets/imgs/38-hotel.png);		
}
#port-page .tab-content  .row > div:nth-of-type(39) {
		background-image: url(../assets/imgs/39-hotel.png);			
}
#port-page .tab-content  .row > div:nth-of-type(40) {
		background-image: url(../assets/imgs/40-hotel.png);			
}
#port-page .tab-content  .row > div:nth-of-type(41) {
		background-image: url(../assets/imgs/41-hotel.png);			
}
#port-page .tab-content  .row > div:nth-of-type(42) {
		background-image: url(../assets/imgs/43-hotel.png);			
}
</style>
