<script>
import { mapActions } from 'vuex'
export default {
  name: 'Instruments',
  props: {
  },
  data () {
    return {
      instruments: [],
      types: [],
      categories: [],
      kinds: [],
      brands: [],
      filter: [],
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    rows () {
      return this.instruments.length
    },
    instrumentsByPage () {
      return this.instruments.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    fetchInstrumentsByPage () {
      this.scrollToTop()
      return this.instrumentsByPage
    }
  },
  async mounted () {
    if (this.$route.name === 'Search') {
      this.instruments = await this.fetchSearchedInstruments(this.$route.query.query)
    }
    if (this.$route.name === 'Instrument') {
      this.instruments = await this.fetchInstruments(this.$route.query.filter)
    }
    this.types = await this.fetchTypes()
    this.categories = await this.fetchCategories()
    this.kinds = await this.fetchKinds()
    this.brands = await this.fetchBrands()
    console.log(this.query)
  },
  methods: {
    ...mapActions(['fetchInstruments', 'fetchCategories', 'fetchBrands', 'fetchTypes', 'fetchKinds', 'fetchSearchedInstruments', 'storeFilter']),
    check: async function (e) {
      this.$router.push({ path: '/instrument', query: { filter: this.filter } })
      this.$router.go()
    },
    sortByPrice: async function (by) {
      let returnValue = 0
      if (by === 'low') returnValue = -1
      if (by === 'high') returnValue = 1
      function compare (a, b) {
        if (a.price < b.price) {
          return returnValue
        }
        if (a.price > b.price) {
          return -returnValue
        }
        return returnValue
      }
      this.instruments = this.instruments.sort(compare)
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<template lang="pug">
.container
  .sort-container
    button(v-on:click="sortByPrice('low')").low-price-button#sort-button Low Price To High Price
    button(v-on:click="sortByPrice('high')").high-price-button#sort-button High Price To Low Price
  .sidebar
    #filter.types
      h5.filter-name Types
      hr
      .filter-list
        ul(v-for="type in types")
          li
            input(type="checkbox" :value="`${type}`" v-model="filter"   @change="check($event)")
            label {{type}}
    #filter.categories
      h5.filter-name Categories
      hr
      .filter-list
        ul(v-for="category in categories")
          li
            input(type="checkbox" :value="`${category}`" v-model="filter"  @change="check($event)")
            label {{category}}
    #filter.kinds
      h5.filter-name Kinds
      hr
      .filter-list
        ul(v-for="kind in kinds")
          li
            input(type="checkbox" :value="`${kind}`" v-model="filter"   @change="check($event)")
            label {{kind}}
    #filter.brands
      h5.filter-name Brands
      hr
      .filter-list
        ul(v-for="brand in brands")
          li
            input(type="checkbox" :value="`${brand}`" v-model="filter"  @change="check($event)")
            label {{brand}}
  .instruments(v-if="instruments.length")
    .instrument(v-for="instrument in fetchInstrumentsByPage")
      .shop
        a(v-bind:href='"/shop/"+instrument.shop.name') {{instrument.shop.name}}
      hr
      img.instrument-image(:src="`${instrument.imageUrl}`")
      h5.brand {{instrument.brand}}
      p.model {{instrument.model}}
      p.price {{instrument.price}} $
      button.basket-button Add To Basket
  .pagination
    .overflow-auto
      b-pagination(v-model="currentPage", :total-rows="rows", :per-page="perPage" v-on:click="scrollToTop()")
</template>

<style lang="scss">
  .container{
    margin: 0;
    padding: 0;
    display: grid;
    width: 75em;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 0.06fr 1fr 0.06fr;
    grid-template-areas:"sidebar sortContainer"
                        "sidebar instruments"
                        "pagination pagination";
    gap: 0.5em;
  }
  .pagination {
    grid-area: pagination;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
  .overflow-auto {
    margin: 0 auto;
    padding-left: 10rem;
  }
  .sort-container {
    grid-area: sortContainer;
    background-color: rgb(220, 220, 220);
    margin: 20px 15px 0px 20px;
    padding: 10px 0 10px 0;
    border-radius: 4px;
  }
  #sort-button {
    border: none;
    margin: 0 2rem 0 2rem;
    padding: 0.4rem;
    font-size: 16px;
    border-radius: 3px;
    background-color: rgb(220, 220, 220);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
  }
  #sort-button:hover {
    background-color: rgb(236, 236, 236);
  }
  #sort-button:focus {
    background-color: white;
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
    padding-top: 0.5rem;
  }
  #filter hr {
    margin: 10px 0 15px 0;
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
    margin-top: 0.2rem;
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
    height: 415px;
    box-shadow: 0px 0px 2px 1.2px rgb(226, 226, 226);
    border-radius: 2px;
    margin-left: 20px;
    margin-top: 20px;
    transition: 0.15s;
    padding: 10px 10px 25px 10px;
  }
  .instrument:hover {
    box-shadow: 0 0 20px 1px rgb(226, 226, 226);
    .basket-button {
      visibility: visible;
      height: 40px;
      transition: 0.25s;
    }
  }
  .shop a {
    color: rgb(80, 154, 156);
    text-decoration: none;
  }
  .shop a:hover {
    color: rgb(39, 105, 109);
  }
  .instrument hr {
    margin: 0 0 5px 0;
  }
  .instrument-image {
    width: 90%;
    height: 55%;
  }
  .brand, .model {
    margin:3px 2px 0px 2px;
  }
  .price {
    position: absolute;
    bottom: 2.3rem;
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
