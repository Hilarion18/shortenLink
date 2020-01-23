<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home-component/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeComponent from '@/components/home/HomeComponent'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    HomeComponent
  }
}
</script>
