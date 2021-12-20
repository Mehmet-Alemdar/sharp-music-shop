<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      shops: [],
      brands: [],
      categories: []
    }
  },
  async mounted () {
    this.shops = await this.fetchShops()
    this.brands = await this.fetchBrands()
    this.categories = await this.fetchCategories()
  },
  methods: {
    ...mapActions(['fetchShops', 'fetchBrands', 'fetchCategories'])
  }
}
</script>

<template lang="pug">
.home
  h1.container-name Shops
  .container(v-if="shops.length")
    .shop-element(v-for="shop in shops")
      a(v-bind:href='"/shop/"+shop._id')
        img(v-bind:src="shop.imageUrl" v-bind:alt="shop.name")
  hr
  h1.container-name Brands
  .container(v-if="brands.length")
    .container-element(v-for="brand in brands")
      a(v-bind:href='brand')
        p.element-name {{brand}}
  hr
  h1.container-name Categories
  .container(v-if="categories.length")
    .container-element(v-for="category in categories")
      a(v-bind:href='category')
        p.element-name {{category}}
</template>

<style lang="scss">
  .home {
    padding-top: 60px;
    padding-left: 50px;
    padding-bottom: 60px;
    padding-right: 50px;
  }
  .container-name {
    font-family: 'Times New Roman', Times, serif;
    color: #42b983;
  }
  .container {
    display: flex;
    //background-color: #FF7558;
    padding: 10px;
    margin: 40px;
  }
  .shop-element {
    width: 190px;
    height: 160px;
  }
  .shop-element img {
    height: 100%;
    width: 100%;
  }
  .container-element {
    width: 220px;
    height: 120px;
    //box-shadow: 0 0 5px 1px rgb(216, 216, 216);
    margin: 10px;
    border: solid 1px;
    border-radius: 2px;
    word-wrap: break-word;
    //background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .container-element:hover {
    background-color: #a1ffd3;
  }
  .element-name {
    color: rgb(0, 0, 0);
    font-family: cursive;
    font-size: 25px;
    margin:40px;

  }
  hr {
    border-top: 1px;
  }
  a {
    text-decoration: none;
  }
</style>
