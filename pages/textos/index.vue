<template>
 <container>
  <v-layout row wrap>
    <v-flex xs12 sm3 v-for="texto in textos" :key="texto.slug">
      <v-card class="ma-1">
        <v-card-title class="headline">{{ texto.titulo }}</v-card-title>
          <v-card-text v-html="texto.texto">
        </v-card-text>
      </v-card>
    </v-flex> 
  </v-layout>
 </container>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState([
      'textos'
    ])
  }
</script>
