<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-1">
          <v-card-title class="headline">{{textos.find(x => x.slug === slug).titulo}}</v-card-title>
          <v-card-text><div v-html="textos.find(x => x.slug === slug).texto"></div></v-card-text>
          <v-card-actions><p><nuxt-link to="/textos">Volver a la lista de textos</nuxt-link></p></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState([
      'textos'
    ]),
    async asyncData ({ params }) {
      console.log('params', params)
      return {
        slug: params.id
      }
    }
  }
</script>
