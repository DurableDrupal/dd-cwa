<template>
  <div class="container">
    <h2>{{textos.find(x => x.slug === slug).titulo}}</h2>
    <div v-html="textos.find(x => x.slug === slug).texto"></div>
    <p><nuxt-link to="/textos">Volver a la lista de textos</nuxt-link></p>
  </div>
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
