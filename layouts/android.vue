<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right app>
      <v-col cols="12">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>

      </v-col>
      <v-row justify="center" class="mt-1">
      <p style="text-align:center"><v-icon>mdi-account-circle</v-icon><span class="mr-2">{{ $auth.user.name }}</span></p>
      </v-row>
    </v-navigation-drawer>
    <v-container fluid class="pa-0">
      <v-card elevation="0" class="mx-auto overflow-hidden">
        <v-app-bar color="deep-purple accent-4" dark prominent>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title class="mr-8">نمایش آموزش 1</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>
        <nuxt/>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

};
</script>