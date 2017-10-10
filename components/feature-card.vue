<template>
  <v-card>
    <v-card-title class="pl-3 pr-2 pt-2 pb-0 mb-0"> 
      <div>
        <h5 class="text-title grey--text text--darken-2">{{ text.metaData.itemName }}</h5>
      </div>
    </v-card-title>
    <v-card-text class="ma-0 pa-0">
      <!-- <div class="body-1" v-html="marked(text.textBody.value)"></div> -->
      <div class="action-item" v-for="action in text.actions">
        <v-btn class="ma-0 pa-0" small block raised :to="action.to">
          <v-icon left light>{{ action.icon }}</v-icon>
          <div> {{ action.label }} </div>
        </v-btn>
      </div>
    </v-card-text>

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

<style>
  .application--light .btn,
  .application--light .btn .icon {
    /* color: #01579b!important; */
    /* color: #0288d1; */
    color: #0277bd;
    /* font-size: 13.5px; */
  }
</style>
