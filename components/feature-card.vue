<template>
  <v-card>
    <v-card-title primary-title> 
      <div>
        <h5 class="text-title">{{ text.metaData.itemName }}</h5>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="body-1" v-html="marked(text.textBody.value)"></div>
    </v-card-text>
    <v-card-actions><p><nuxt-link to="/">Learn more...</nuxt-link></p></v-card-actions>
  </v-card>
</template>

<script>
  import marked from 'marked'
  export default {
    methods: {
      marked: marked
    },
    props: ['text']
  }
</script>
