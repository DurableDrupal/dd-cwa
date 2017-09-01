<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-1">
          <v-card-title class="headline mb-1">{{textos.find(x => x.slug === slug).titulo}}</v-card-title>
          <v-card-text>
            <p class="primary--text subheading mt-0">{{textos.find(x => x.slug === slug).autor}}</p>
            <blockquote class="body-2" v-html="textos.find(x => x.slug === slug).texto"></blockquote>
            <p class="primary--text mt-2">{{textos.find(x => x.slug === slug).fecha}}</p>
          </v-card-text>
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
      return {
        slug: params.id
      }
    }
  }
</script>
