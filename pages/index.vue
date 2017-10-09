<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm4 mb-1>
      <v-card>
        <v-card-title class="headline">{{ featureCommunity.metaData.itemName }}</v-card-title>
        <v-card-text>
          <p>{{ featureCommunity.textBody.value }}</p>
          <div class="text-xs-right">
            <em><small>&mdash; Victor Kane</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 mb-1>
      <v-card>
        <v-card-title class="headline">{{ featureMentoring.metaData.itemName }}</v-card-title>
        <v-card-text>
          <p>{{ featureMentoring.textBody.value }}</p>
          <div class="text-xs-right">
            <em><small>&mdash; Victor Kane</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 mb-1>
      <v-card>
        <v-card-title class="headline">{{ featureRaas.metaData.itemName }}</v-card-title>
        <v-card-text>
          <p>{{ featureRaas.textBody.value }}</p>
          <div class="text-xs-right">
            <em><small>&mdash; Victor Kane</small></em>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
 </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
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
