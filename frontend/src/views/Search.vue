<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      instruments: []
    }
  },
  async mounted () {
    const query = this.$route.query.query
    this.instruments = await this.fetchSearchedInstruments(query)
  },
  methods: {
    ...mapActions(['fetchSearchedInstruments'])
  }
}
</script>

<template lang="pug">
  .search
    h1 search page
    .instruments(v-if="instruments.length > 0")
      .instrument(v-for="instrument in instruments")
        p {{ instrument.type }}
        p {{ instrument.category }}
        p {{ instrument.kind }}
        p {{ instrument.brand }}
        p {{ instrument.model }}
        p {{ instrument.price }}
        hr
    .instruments(v-else)
      p none
</template>

<style lang="scss">
</style>
