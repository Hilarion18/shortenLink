<template>
  <div id="app">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div>
          <router-link class="head-page" to="/">
            Welcome to shorten-link
          </router-link>
        </div>
        <div class="head-page2">
          The link shortener with a long name
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.head-page {
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: Montserrat;
  font-size: 47px;
  color: #EB4A42;
  text-decoration: underline;
}

.head-page2 {
  margin-top: 23px;
  margin-bottom: 30px;
  font-family: roboto;
  font-weight: 100;
  font-size: 22px;
  color: #AAAAAA;
}

.container {
  padding-right: 100px;
  padding-left: 100px;
}
</style>
