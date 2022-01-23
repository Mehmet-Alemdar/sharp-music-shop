<script>
import { mapActions } from 'vuex'
import Instruments from '@/components/Instruments.vue'
export default {
  name: 'Instrument',
  data () {
    return {
      instruments: []
    }
  },
  async mounted () {
    // this codes for filter instrument
    const query = this.$route.query.filter
    this.instruments = await this.fetchInstruments(query)
  },
  methods: {
    ...mapActions(['fetchInstruments'])
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
