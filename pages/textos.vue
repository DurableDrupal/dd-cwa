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
  export default {
    data () {
      return {
        textos: [
          {
            titulo: 'Integer Semper',
            slug: 'integer-semper',
            texto: '<p>Integer semper velit fo shizzle purus...</p>'
          },
          {
            titulo: 'Adipiscing Gansta',
            slug: 'adipiscing-gansta',
            texto: '<p>Lorizzle ipsum shizznit sit owned, consectetuer adipiscing gangsta...</p>'
          },
          {
            titulo: 'Black Pellentesque',
            slug: 'black-pellentesque',
            texto: '<p>Black pellentesque nibh et turpizzle. Stuff get down get down tortizzle...</p>'
          },
          {
            titulo: 'Sed Errizle',
            slug: 'sed-errizle',
            texto: '<p>Sed erizzle. Boofron izzle dolor fo shizzle turpis tempizzle crazy...</p>'
          },
          {
            titulo: 'Crunk Vizzle',
            slug: 'crunk-vizzle',
            texto: '<p>Crunk vizzle, check out this. Pellentesque funky fresh tortor...</p>'
          },
          {
            titulo: 'Nullam Things',
            slug: 'nullam-things',
            texto: '<p>Nullam things velit, pimpin\' volutpizzle, suscipizzle hizzle...</p>'
          },
          {
            titulo: 'Lorizzle Ipsum',
            slug: 'lorizzle-ipsum',
            texto: '<p>Lorizzle ipsum shizznit sit owned, consectetuer adipiscing gangsta...</p>'
          },
          {
            titulo: 'That is the shizzle',
            slug: 'that-s-the-shizzle',
            texto: '<p>That\'s the shizzle check it out.</p>'
          }
        ]
      }
    }
  }
</script>
