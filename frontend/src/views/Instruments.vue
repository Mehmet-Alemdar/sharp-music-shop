<script>
import { mapActions } from 'vuex'
export default {
  name: 'Instruments',
  data () {
    return {
      instruments: []
    }
  },
  async mounted () {
    this.instruments = await this.fetchInstruments()
  },
  methods: {
    ...mapActions(['fetchInstruments'])
  }
}
</script>

<template lang="pug">
  .container
    .instruments(v-if='instruments.length')
      .instrument(v-for='instrument in instruments')
        img.instrument-img(:src="`${instrument.imageUrl}`")
        .instrument-info
          h4 {{ instrument.brand }}
          h4 {{ instrument.model }}
          p.price {{ instrument.price }} $
        button.basket-button Add To Basket
    .instruments(v-else)
      p none
</template>

<style lang="scss">
  .container {
    display: inline-block;
    margin-left: auto;
    margin-right: auto
  }
  .instruments{
    display: flex;
    flex-wrap: wrap;
    width: 68em;
    height: 100%;
  }
  .instrument {
    position: relative;
    text-align: center;
    width: 250px;
    height: 400px;
    box-shadow: 0 0 1px 1px rgb(167, 167, 167);
    transition: 0.15s;
    padding-bottom: 20px;
    margin: 11px;
  }
  .instrument:hover {
    box-shadow: 0 0 10px 1px rgb(167, 167, 167);
    .basket-button {
      visibility: visible;
      height: 40px;
      transition: 0.25s;
    }
  }

  .instrument-img {
    width: 100%;
    height: 250px;
  }

  .instrument-info {
    padding-right: 5px;
    padding-left: 5px;
  }

  .basket-button {
    width: 100%;
    height: 30px;
    color: #2c3e50;
    background-color: #42b983;
    border: none;
    border-radius: 0;
    visibility: hidden;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }

  .basket-button:hover{
    background-color: #2bad73;
  }

  .price {
    position: absolute;
    bottom: 30px;
    left: 38%;
  }

  h4 {
    color:#2c3e50;
    margin: 10px;
  }

</style>
