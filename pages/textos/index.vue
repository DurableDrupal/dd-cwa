<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm3 v-for="texto in textos" :key="texto.slug">
      <v-card class="ma-1">
        <v-card-title class="headline texto-card">
          <nuxt-link :to="{ name: 'textos-id', params: { id: texto.slug } }">
            {{ texto.titulo }}
          </nuxt-link>
        </v-card-title>
        <v-card-text>
          <p>{{ texto.texto.replace(/<(?:.|\n)*?>/gm, '').substr(0,30) + '...' }}</p>
        </v-card-text>
        <v-card-actions>
          <p>{{ texto.autor }}</p>
          <p class="right">{{ texto.fecha }}</p>
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

<style>
.texto-card a {
  text-decoration: none !important;
  padding: 2px !important;
}
.texto-card a:hover {
  color: #fff8e1 !important;
  background-color: #c47754 !important;
}
</style>
