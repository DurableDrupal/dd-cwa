<template>
 <v-container>
  <v-layout row wrap>
    <v-flex xs12 sm3 v-for="blog in blogs" :key="blog.slug">
      <v-card class="ma-1">
        <v-card-title class="headline blog-card">
          <nuxt-link :to="{ name: 'blogs-id', params: { id: blog.slug } }">
            {{ blog.blog }}
          </nuxt-link>
        </v-card-title>
        <v-card-text>
          <p>{{ blog.blog.replace(/<(?:.|\n)*?>/gm, '').substr(0,30) + '...' }}</p>
        </v-card-text>
        <v-card-actions>
          <p>{{ blog.autor }}</p>
          <p class="right">{{ blog.fecha }}</p>
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
      'blogs'
    ])
  }
</script>

<style>
.blog-card a {
  text-decoration: none !important;
  padding: 2px !important;
}
.blog-card a:hover {
  color: #fff8e1 !important;
  background-color: #c47754 !important;
}
</style>
