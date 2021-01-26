<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container pt-md-5 px-md-5">
    <img src="../../assets/images/logo.png" class="navbar-brand">
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li @click="hidenav()" class="nav-item">
          <router-link class="nav-link" to="/" exact>Accueil</router-link>
        </li>
        <li @click="hidenav()" class="nav-item">
          <a data-scroll class="nav-link" href="#produits">Produits</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Télécharger
          </a>
          <ul @click="hidenav()" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="dropdown-item" to="/telecharger">Flex POS Point de vente</router-link></li>
            <li><router-link class="dropdown-item" to="/telecharger">Flex CS Gestion commerciale</router-link></li>
            <li><router-link class="dropdown-item" to="/telecharger">Flex PMS Système de gestion hôtelière</router-link></li>
            <li><router-link class="dropdown-item" to="/telecharger">Flex XM Solution ERP/GMAO</router-link></li>
            <li><router-link class="dropdown-item" to="/telecharger">Flex Paie</router-link></li>
          </ul>
        </li>
        <li @click="hidenav()" class="nav-item">
          <router-link class="nav-link" to="/contactez-nous">Contactez nous</router-link>
        </li>          
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: "NavBar",
        methods: {
            hidenav() {
            
                document.getElementById("navbarNavDropdown").classList.remove("show");
        }
    }
        
        
    }
</script>

<style scoped>
    nav {
        background-color: transparent
    }
    .navbar-brand {
     width: 45px  
    }
    
    li > a {
        color: #FB8C00 !important
    }
    
    .navbar-light .navbar-toggler {
        color: transparent;
        background-color: transparent
    }
    .nav-link:hover {
        color: #FFA726 !important
    }

</style>