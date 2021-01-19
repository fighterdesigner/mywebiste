<template>
<div class="Jambotron">
<div id="resume-jumbotron" class="jumbotron">
	<div class="container">
		<h3 class="display-4">{{jamTitle}}</h3>
		<h6 class="text-muted">{{jamDescription}}</h6>
	</div>
</div>    
</div>
</template>

<script>
    
    export default {
        name: "Jambotron",
        props: ['jamTitle','jamDescription']
    }

</script>

<style>
</style>
