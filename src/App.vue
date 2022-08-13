<template>
  <v-app>
    <v-main>
      <MenuPage />
    </v-main>
  </v-app>
</template>

<script>
import MenuPage from './components/Pages/Menu/MenuPage.vue'

export default {
  name: 'App',

  components: {
    MenuPage,
  },

  data: () => ({}),
}
</script>
