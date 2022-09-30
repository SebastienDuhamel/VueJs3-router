<template>
  <nav>
    <router-link to="/"> Accueil </router-link> | <!-- on creer les liens comme des balises <a> -->
    <router-link to="/next"> Next </router-link> |
    <router-link :to="{name:'Product', params : {designation:'Skate'}}"> Product 1</router-link> |
    <router-link :to="{name:'Product', params : {designation:'Trotinette'}}"> Product 2</router-link> |
    <button @click="showProduct('Roller')"> Produit 3 </button>
  </nav>
  <router-view/> <!-- sert à creer la vue des liens -->
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  methods:{
    showProduct: function (prod){
      this.$router.push({name : 'Product', params : { designation : prod}});// le lien est fait en code
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a{
  text-decoration: none;
  color: #999;
}

.router-link-active{
  font-weight: bold;
  color: blueviolet;
}
</style>
