<template>
  <div id="app">

    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <router-view></router-view>
        </div>
        <div class="col-lg-4">
          <Cart></Cart>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import Cart from './components/view/cart'
import Navbar from './components/view/Navbar'

export default {
  name: 'App',
  components: {
    Cart,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.card.shop-card {
   border: 2px solid red;
  border: 2px solid red;
  box-shadow: -2px 2px 4px 0 #000;
  margin-bottom: 25px;
 }
nav.navbar.navbar-expand-lg.navbar-light.bg-light {
  margin-bottom: 45px;
}
</style>
