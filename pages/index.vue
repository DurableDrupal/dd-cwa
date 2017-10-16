<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 mb-4>
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
    <v-flex xs12 sm4 mb-4>
      <v-card>
        <v-card-title primary-title> 
          <div>
            <v-btn 
              small
              round 
              to="/move-on" 
              title="What\'s making things change so much now?" 
              alt="What\'s making everything change so much now?">
              <div>Move on</div>
            </v-btn>
            to a semantically structured industry standard 
            <v-btn 
              small
              round 
              to="/web-architecture-options" 
              title="Learn about the best web architecture alternative available to you today"
              alt="Learn about the best web architecture alternative available to you today">
            content model
            </v-btn>
            tailored to your app
          </div>
        </v-card-title> 
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 mb-4>
      <v-card>
        <v-card-title primary-title> 
          <div>
            <v-btn 
              small
              round 
              to="/move-on" 
              title="What\'s making things change so much now?" 
              alt="What\'s making everything change so much now?">
              Move on
            </v-btn>
            from the Drupal monolith to an open and truly modern
            <v-btn 
              small
              round 
              to="/web-architecture-options" 
              title="Learn about the best web architecture alternative available to you today"
              alt="Learn about the best web architecture alternative available to you today">
              API-first
            </v-btn>architecture
          </div>
        </v-card-title> 
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 mb-4>
      <v-card>
        <v-card-title primary-title> 
          <div>
            <v-btn 
              small
              round 
              to="/read-the-book" 
              title="Learn how we ate our own dogfood for the content migration and rescue of Drupal 6 AWebFactory.com"
              alt="Learn how we ate our own dogfood for the content migration and rescue of Drupal 6 AWebFactory.com">
              Read the book
            </v-btn>
            <v-btn 
              small
              round 
              to="/grab-the-code" 
              title="Grab the code from the Github repo"
              alt="Grab the code from the Github repo">
            grab the code 
            </v-btn>
            direct your own content migration rescue, or 
            <v-btn 
              small
              round 
              to="/raas" 
              title="Learn about the content migration rescue services you can contract right here"
              alt="Learn about the content migration rescue services you can contract right here">
            use our services
            </v-btn>
          </div>
        </v-card-title> 
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12 sm4 mb-4>
      <FeatureCard :text="featureCommunity"></FeatureCard>
    </v-flex>
    <v-flex xs12 sm4 mb-4>
      <FeatureCard :text="featureMentoring"></FeatureCard>
    </v-flex>
    <v-flex xs12 sm4 mb-4>
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
      fcactions.push({icon: 'fa-book', label: 'read the book', tooltip: 'Read the book', to: '/read-the-book'})
      fcactions.push({icon: 'fa-code', label: 'grab the code', tooltip: 'Grab the code from the Github repo', to: '/grab-the-code'})
      fcactions.push({icon: 'fa-line-chart', label: 'see case studies', tooltip: 'See case studies and examples contributed by the community', to: '/case-studies'})
      fcactions.push({icon: 'fa-briefcase', label: 'your projects', to: '/manage-projects'})
      fc.actions = fcactions
      let fm = featureMentoring.data
      let fmactions = []
      fmactions.push({icon: 'fa-university', label: 'mentoring services', tooltip: 'Learn about mentoring services offered here', to: '/mentoring-services'})
      fmactions.push({icon: 'fa-users', label: 'team mentoring', tooltip: 'Have mentors join your team as needed', to: '/team-mentorship'})
      fmactions.push({icon: 'web', label: 'fullstack mentoring', tooltip: 'Receive mentorship on all aspects of full stack javascript web application project development', to: '/full-stack-mentorship'})
      fmactions.push({icon: 'fa-beer', label: 'free session', tooltip: 'Get a free online mentoring session', to: '/free-mentoring-session'})
      fm.actions = fmactions
      let fr = featureRaas.data
      let fractions = []
      fractions.push({icon: 'fa-cog', label: 'web architecture', tooltip: 'Learn about the best web architecture alternative available to you today', to: '/web-architecture-options'})
      fractions.push({icon: 'fa-th-list', label: 'content migration', tooltip: 'Learn about the best content migration options available today for your legacy Drupal site', to: '/content-migration-options'})
      fractions.push({icon: 'fa-play', label: 'migration services', tooltip: 'Learn about content migration rescue services offered here', to: '/raas'})
      fractions.push({icon: 'fa-beer', label: 'free session', tooltip: 'Tell us about your project and get a free online content migration consulting session', to: '/free-consulting-session'})
      fr.actions = fractions
      return {
        featureCommunity: fc,
        featureMentoring: fm,
        featureRaas: fr
      }
    }
  }
</script>

<style>
.application-light .btn__content {
  background-color: pink;
  color: brown;
}
</style>