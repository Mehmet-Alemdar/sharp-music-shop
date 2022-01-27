<script>
import { mapActions } from 'vuex'
export default {
  name: 'Instrument',
  data () {
    return {
      instrument: []
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.instrument = await this.fetchInstrumentById(id)
  },
  methods: {
    ...mapActions(['fetchInstrumentById'])
  }
}
</script>

<template lang="pug">
</template>
