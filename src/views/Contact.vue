<template>
  <div class="contact-page">

<Jambotron :jamTitle="Title" :jamDescription="Description"/>  
      
<div class="my-4 container">
	
	<!--- Map --->
	<div class="col-12 my-4">
		<iframe class="card" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108690.54632017337!2d-8.0305281!3d31.6453598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh!5e0!3m2!1sen!2sma!4v1605822257697!5m2!1sen!2sma" frameborder="0" width="100%" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
	</div>
	<!--- Map --->

	<div class="container">
		
		<div class="row">
			
			<div class="col-xs-12 col-md-4 my-4">
				<div class="row flex-row my-2">
					<i class="skills-icons col-2 fas fa-mobile-alt fa-2x"></i>
					<span class="col-10 px-4">
						<h5>+212615217562</h5>
						<p>This phone number has also Whatsapp, it's better to contact me using it for a quick respond.</p>
					</span>
				</div>
				<div class="row flex-row my-2">
					<i class="skills-icons col-2 fas fa-map-marker-alt fa-2x"></i>
					<span class="col-10 px-4">
						<h5>Marrakech, Ma</h5>
						<p>My office is located in marraksch city of morocco, in the city center, the biggest building, the third floor.</p>
					</span>
				</div>
				<div id="email" class="row flex-row my-2">
					<i class="skills-icons col-2 fas fa-envelope fa-2x"></i>
					<span class="col-10 px-4">
						<h5 style="word-wrap: break-word;">Designsleader@gmail.com</h5>
						<p>Use this email to contact me as well, the respond could take up to 2 hours, if you were a big company i recommend using it.</p>
					</span>
				</div>								
			</div>
			<div class="col-xs-12 col-md-8">
				
				<div class="container">
					<h3 class="my-2 all-title font-weight-normal">How Can I Help You ?</h3>
					<div class="row">
						<form name="contact" method="POST" data-netlify="true">
							<div class="row">
								<div class="py-2 col-md-6 col-xs-12">

								 <input name="name" class="form-control" placeholder="Enter name" type="text">

								 <input name="email" class="my-2 form-control" placeholder="Enter email" id="email-input" type="text">

								 <input name="subject" class="form-control" placeholder="Subject" id="subject-input" type="text">	

								</div>
								<div class="py-2 col-md-6 col-xs-12">
									<textarea name="message" placeholder="Your message" class="form-control"></textarea>
								</div>
							<div class="col-12">
							<button type="submit" class="btn bg-light shadow my-2 buttons-border-blue">Send message</button>
							</div>

							</div>
						</form>
					</div>
				</div>

			</div>

		</div>

	</div>

</div>      
      
  </div>
</template>

<script>

    import Jambotron from "@/components/global/Jambotron.vue";
    
export default {
    
    data: function() {
        return {
        Title: "Contact",
        Description: "Get in touch with me"
        };
    },    
  name: "Contact",
    components: {
        Jambotron
    }
};
</script>

<style scoped>
 form {
 	height: 100%;
 	width: 100%
 }
 form textarea {
 	height: 100%;
 }
 form textarea:focus {
 	height: 250px
 }
</style>
