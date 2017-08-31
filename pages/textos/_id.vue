<template>
  <div class="container">
  <!--
    <h1>{{ texto.titulo }}</h1>
    <pre>{{ texto.texto }}</pre>
  -->
    <p><nuxt-link to="/textos">Volver a la lista de textos</nuxt-link></p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState([
      'textos'
    ]),
    texto: function () {
      return this.textos[0]
    }
  }
</script>
