<script>
import { mapActions } from 'vuex'
export default {
  name: 'Instruments',
  data () {
    return {
      instruments: [],
      types: [],
      categories: [],
      kinds: [],
      brands: []
    }
  },
  async mounted () {
    this.instruments = await this.fetchInstruments()
    this.types = await this.fetchTypes()
    this.categories = await this.fetchCategories()
    this.kinds = await this.fetchKinds()
    this.brands = await this.fetchBrands()
  },
  methods: {
    ...mapActions(['fetchInstruments', 'fetchCategories', 'fetchBrands', 'fetchTypes', 'fetchKinds', 'fecthInstrumentsByPageNumber'])
  }
}
</script>

<template lang="pug">
.container
  .sidebar
    #filter.types
      h4.filter-name Types
      hr
      .filter-list
        ul(v-for="type in types")
          li
            input(type="checkbox" name="checkbox-type")
            label(for="checkbox-type") {{type}}
    #filter.categories
      h4.filter-name Categories
      hr
      .filter-list
        ul(v-for="category in categories")
          li
            input(type="checkbox")
            label {{category}}
    #filter.kinds
      h4.filter-name Kinds
      hr
      .filter-list
        ul(v-for="kind in kinds")
          li
            input(type="checkbox")
            label {{kind}}
    #filter.brands
      h4.filter-name Brands
      hr
      .filter-list
        ul(v-for="brand in brands")
          li
            input(type="checkbox")
            label {{brand}}
  .instruments(v-if="instruments.length")
    .instrument(v-for="instrument in instruments")
      img.instrument-image(:src="`${instrument.imageUrl}`")
      h3.brand {{instrument.brand}}
      p.model {{instrument.model}}
      p.price {{instrument.price}} $
      button.basket-button Add To Basket
</template>

<style lang="scss">
  .container{
    margin: 0;
    padding: 0;
    display: grid;
    width: 75em;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:"sidebar instruments";
    gap: 0.5em;
  }
  .sidebar{
    grid-area: sidebar;
    width: 16em;
    margin-left: 10px;
    padding-bottom: 40px;
  }
  #filter{
    background-color: rgba(148, 148, 148, 0.3);
    padding: 5px 0px 20px 0px;
    margin-top: 20px;
    border-radius: 8px;
  }
  .filter-name {
    color: black;
  }
  .filter-list  {
    width: 15em;
    min-height: 100px;
    max-height: 250px;
    overflow-y: auto;
  }
  .filter-list::-webkit-scrollbar {
    width: 5px;
  }
  .filter-list::-webkit-scrollbar-track {
    background-color: rgb(197, 197, 197);
    border-radius: 10px;
  }
  .filter-list::-webkit-scrollbar-thumb {
    background: rgb(68, 68, 68);
    border-radius: 10px;
  }
  .filter-list ul {
    list-style-type: none;
    padding-left: 12px;
  }
  #filter label{
    display: flex;
    font-family:serif;
    color: black;
    font-size: 18px;
    padding-left: 10px;
  }
  input[type=checkbox] {
    float: left;
    width: 1.2em;
    height: 1.2em;
  }
  .instruments {
    grid-area: instruments;
    height: auto;
    width: 100%;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .instrument {
    position: relative;
    cursor: pointer;
    width: 250px;
    height: 410px;
    box-shadow: 0px 0px 2px 1.2px rgb(226, 226, 226);
    border-radius: 2px;
    margin-left: 20px;
    margin-top: 20px;
    transition: 0.15s;
    padding: 10px 10px 20px 10px;

  }
  .instrument:hover {
    box-shadow: 0 0 20px 1px rgb(226, 226, 226);
    .basket-button {
      visibility: visible;
      height: 40px;
      transition: 0.25s;
    }
  }
  .instrument-image {
    width: 100%;
    height: 240px;
  }
  .brand, .model {
    margin:5px 0px 0px 0px;
  }
  .price {
    position: absolute;
    bottom: 40px;
    left: 38%;
  }
  .basket-button {
    width: 100%;
    height: 25px;
    cursor: pointer;
    border: none;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background-color: #C70039;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
    color: white;
    visibility: hidden;
  }
  .basket-button:hover {
    background-color: #b60034;
  }

  @media (min-width: 1200px) {
    .container {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
</style>
