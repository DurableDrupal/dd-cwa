<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm3 v-for="texto in textos" :key="texto.slug">
      <v-card class="ma-1">
        <v-card-title class="headline">{{ texto.titulo }}</v-card-title>
        <v-card-text v-html="texto.texto"></v-card-text>
        <v-card-actions>
          <nuxt-link :to="{ name: 'textos-id', params: { id: texto.slug } }">Ver {{ texto.titulo }} completo</nuxt-link>
        </v-card-actions>
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
    ])
  }
</script>
