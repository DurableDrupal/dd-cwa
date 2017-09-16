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
          exact
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
    <v-footer class="success pa-3">
      <v-container fluid>
        <v-layout>
          <v-flex>
            <v-btn
              flat
              exact
              v-for="fitem in footerItems"
              :key="fitem.title"
              :to="fitem.to"
              class="grey--text text--lighten-4 pa-3">
              {{ fitem.title }}
            </v-btn>
          </v-flex>
        </v-layout>
        <div class="mt-2">Texts © 2017 authored by Victor Kane CC-BY-SA (unless otherwise stated) Creative Commons Attribution-ShareAlike 4.0 International License <v-btn fab small primary dark title="@praxispoetica" href="http://twitter.com/praxispoetica"><v-icon>fa-twitter</v-icon></v-btn></div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        items: [
          { icon: 'group', title: 'Support', to: '/support' },
          { icon: 'group', title: 'Atract Clients', to: '/atractclients' },
          { icon: 'create', title: 'Textos', to: '/textos' },
          { icon: 'comment', title: 'Contact', to: '/contact' },
          { icon: 'info', title: 'Who we are', to: '/us' },
          { icon: 'info', title: 'Technology', to: '/technology' }
        ],
        footerItems: [
          { icon: 'home', title: 'Main', to: '/' },
          { icon: 'group', title: 'Support', to: '/support' },
          { icon: 'group', title: 'Atract Clients', to: '/atractclients' },
          { icon: 'create', title: 'Textos', to: '/textos' },
          { icon: 'comment', title: 'Contact', to: '/contact' },
          { icon: 'info', title: 'Who we are', to: '/us' },
          { icon: 'info', title: 'Technology', to: '/technology' }
        ]
      }
    }
  }
</script>

<style>
/* colors based on https://material.io/guidelines/style/color.html#color-color-palette and not vuetify palette */
.application--light {
  background-image: url("/img/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #5e92f3;
}

.application--light .card,
.application--light .navigation-drawer,
.application--light .navigation-drawer .list,
.application--light .toolbar {
  background-color: #5e92f3;
}

.application, .application>main>.container {
  min-height: 100%;
  margin-bottom: 1em;
}

.application--light .footer {
  text-align: center;
  height: auto;
  color: #5e92f3;
}

.logo img {
  width: 100%;
  height: auto !important;
  margin-top: 10px;
}
</style>
