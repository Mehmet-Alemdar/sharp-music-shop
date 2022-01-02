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
      h4 Types
      ul(v-for="type in types")
        li
          input(type="checkbox" name="checkbox-type")
          label(for="checkbox-type") {{type}}
    #filter.categories
      h4 Categories
      ul(v-for="category in categories")
        li
          input(type="checkbox")
          label {{category}}
    #filter.kinds
      h4 Kinds
      ul(v-for="kind in kinds")
        li
          input(type="checkbox")
          label {{kind}}
    #filter.brands
      h4 Brands
      ul(v-for="brand in brands")
        li
          input(type="checkbox")
          label {{brand}}
  .instruments(v-if="instruments.length")
    .instrument(v-for="instrument in instruments")
      img.instrument-image(:src="`${instrument.imageUrl}`")
      p {{instrument.brand}}
      p {{instrument.model}}
      p {{instrument.price}} $
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
  #filter{
    background-color: rgba(148, 148, 148, 0.3);
    padding: 5px 10px 20px 0px;
    margin-top: 20px;
    border-radius: 8px;
  }
  .sidebar{
    grid-area: sidebar;
    width: 14em;
    margin-left: 10px;
    padding-bottom: 40px;
  }
  ul {
    list-style-type: none;
  }
  label{
    display: flex;
    font-family:serif;
    color: black;
    font-size: 17px;
    padding-left: 10px;
    padding-right: 20px;
  }
  input[type=checkbox] {
    float: left;
    width: 1.2em;
    height: 1.2em;
    position: absolute;
    left: 30px;
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
    width: 250px;
    height: 410px;
    box-shadow: 0 0 1px 1px rgb(185, 185, 185);
    border-radius: 2px;
    margin-left: 20px;
    margin-top: 20px;
    transition: 0.15s;
    padding: 10px 10px 20px 10px;
    content: point;
  }
  .instrument:hover {
    box-shadow: 0 0 10px 1px rgb(167, 167, 167);
  }
  .instrument-image {
    width: 100%;
    height: 240px;
  }
  .page {
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    .container {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
</style>
