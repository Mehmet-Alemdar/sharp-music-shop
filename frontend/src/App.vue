<template lang="pug">
  #app
    #nav
      router-link(to='/') Home
      .search
        form(action='/search' method="GET")
          input(name="query" id="query")
          button Search
      router-view
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  background-color: #a1dac0;
  border: solid 2px #a1dac0;
  border-radius: 2px;
}
</style>
