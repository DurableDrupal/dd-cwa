<template>
  <v-card class="ma-1">
    <v-card-title primary-title> 
      <div>
        <h3 class="text-title">{{ text.metaData.itemName }}</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="body-1" v-html="text.textBody.value"></div>
      <p class="primary--text mt-2">{{ text.metaData.publishedDate | dateEn }}</p>
    </v-card-text>
    <v-card-actions><p><nuxt-link to="/">Learn more...</nuxt-link></p></v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['text']
  }
</script>
