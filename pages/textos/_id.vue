<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-1">
          <v-card-text>
            <p class="primary--text subheading mt-0">{{texto.autor}}</p>
            <blockquote class="body-1" v-html="texto.texto"></blockquote>
            <p class="primary--text mt-2">{{texto.fecha}}</p>
          </v-card-text>
          <v-card-actions><p><nuxt-link to="/textos">Volver a la lista de textos</nuxt-link></p></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        texto: this.$store.state.textos.find(x => x.slug === this.$route.params.id)
      }
    }
  }
</script>
