<template>
  <div class="container home">
    <home-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/home/HomeComponent'

export default {
  name: 'home',
  components: {
    HomeComponent
  }
}
</script>
