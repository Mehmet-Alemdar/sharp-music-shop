<template lang="pug">
  #app
    #nav
      router-link(to='/') Home
      router-link(to='/instrument')  | Instruments
      .searchbox-container
        form.form-container(action='/search' method="GET")
          input.search-term(type='text' name="query" placeholder='What are you looking for?')
          button.search-button(type='submit') Search
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
.searchbox-container {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}

.search-term {
  background-color: rgb(231, 231, 231);
  color: black;
  width: 25rem;
  height: 3rem;
  padding-left: 20px;
  border: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-family:serif;
  font-size: 18px;
  outline: none;
}

.search-term::placeholder {
  color: rgb(143, 134, 117);
}

.search-term:focus {
  border: solid 2px rgb(241, 79, 20);
}

.search-button {
  background-color: rgb(241, 79, 20);
  width: 5rem;
  height:3.4rem;
  color: white;
  border: none;
  margin-bottom: 10px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  font-family:serif;
  font-size: 18px;
}

.search-button:hover  {
  background-color: rgb(224, 52, 0);
}

</style>
