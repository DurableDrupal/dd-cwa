<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm4 mb-1>
      <FeatureCard :text="featureCommunity"></FeatureCard>
    </v-flex>
    <v-flex xs12 sm4 mb-1>
      <FeatureCard :text="featureMentoring"></FeatureCard>
    </v-flex>
    <v-flex xs12 sm4 mb-1>
      <FeatureCard :text="featureRaas"></FeatureCard>
    </v-flex>
  </v-layout>
 </v-container>
</template>

<script>
  import axios from 'axios'
  import FeatureCard from '../components/feature-card'

  export default {
    components: {
      FeatureCard
    },
    async asyncData ({ params }) {
      let featureCommunity = await axios.get(process.env.scsurl + '/api/textsbyslug/community-20171009')
      let featureMentoring = await axios.get(process.env.scsurl + '/api/textsbyslug/mentoring-20171009')
      let featureRaas = await axios.get(process.env.scsurl + '/api/textsbyslug/raas-20171009')
      return {
        featureCommunity: featureCommunity.data,
        featureMentoring: featureMentoring.data,
        featureRaas: featureRaas.data
      }
    }
  }
</script>
