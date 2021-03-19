<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <router-link to="/home">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('./assets/logo.png')"
            transition="scale-transition"
            width="100%"
          />
        </router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer class="mt-4" color="accent" padless>
      <v-row justify="center" no-gutters>
        <v-col class="accent py-4 text-center white--text" cols="12">
          &copy; {{ new Date().getFullYear() }} — <strong>Gaston's Pokemon Collection</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>
