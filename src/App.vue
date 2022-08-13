<template>
  <v-app>
    <v-main :style="mainStyle">
      <MenuPage />
    </v-main>
  </v-app>
</template>

<script>
import MenuPage from './components/Pages/Menu/MenuPage.vue'
import backgroundImage from './assets/background-image.jpg'
export default {
  name: 'App',

  components: {
    MenuPage,
  },

  data: () => ({
    mainStyle: {
      backgroundImage: `linear-gradient(
      rgba(9, 47, 15, 0.2), 
      rgba(9, 47, 15, 0.2)
    ), url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      z: -2,
    },
  }),
}
</script>
