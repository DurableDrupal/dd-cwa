<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="ma-1">
          <v-card-title class="headline mb-1">{{blog.titulo}}</v-card-title>
          <v-card-text>
            <p class="primary--text subheading mt-0">{{blog.autor}}</p>
            <blockquote class="body-1" v-html="blog.blog"></blockquote>
            <p class="primary--text mt-2">{{blog.fecha}}</p>
          </v-card-text>
          <v-card-actions><p><nuxt-link to="/blogs">Return to the list of blogs</nuxt-link></p></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        blog: this.$store.state.blogs.find(x => x.slug === this.$route.params.id)
      }
    }
  }
</script>
