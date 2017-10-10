<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 mb-2>
      <v-card>
          <v-card-title primary-title> 
            <div>
              <h4>Join the DurableDrupal Content Migration Rescue Community</h4>
            </div>
          </v-card-title> 
        </v-card> 
      </v-card>
    </v-flex>
  </v-layout>
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

      let fc = featureCommunity.data
      let fcactions = []
      fcactions.push({icon: 'book', label: 'read the book', to: '/read-the-book'})
      fcactions.push({icon: 'code', label: 'grab the code', to: '/grab-the-code'})
      fcactions.push({icon: 'file-text', label: 'see case studies', to: '/case-studies'})
      fcactions.push({icon: 'map', label: 'manage your projects', to: '/manage-projects'})
      fc.actions = fcactions
      let fm = featureMentoring.data
      let fmactions = []
      fmactions.push({icon: 'book', label: 'read the book', to: '/read-the-book'})
      fm.actions = fmactions
      let fr = featureRaas.data
      let fractions = []
      fractions.push({icon: 'book', label: 'read the book', to: '/read-the-book'})
      fr.actions = fractions
      return {
        featureCommunity: fc,
        featureMentoring: fm,
        featureRaas: fr
      }
    }
  }
</script>
