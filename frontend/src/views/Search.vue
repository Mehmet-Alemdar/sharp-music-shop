<script>
import { mapActions } from 'vuex'
import Instruments from '@/components/Instruments.vue'
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
  },
  components: {
    Instruments
  }
}
</script>

<template lang="pug">
  Instruments(:instruments="this.instruments")
</template>

<style lang="scss">
</style>
