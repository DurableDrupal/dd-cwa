<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile 
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link to="/">
          <img class="logo" src="/logo.png" alt="PraxisPoetica" title="PraxisPoetica" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in items"
          :key="item.title"
          :to="item.to">
          <v-icon left light>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>Texts Copyright © 2017 authored by Victor Kane CC-BY-SA @victorkane (unless otherwise stated) Creative Commons Attribution-ShareAlike 4.0 International License</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        items: [
          { icon: 'home', title: 'Inicio', to: '/' },
          { icon: 'group', title: 'Artists', to: '/nosotros' }
        ]
      }
    }
  }
</script>
