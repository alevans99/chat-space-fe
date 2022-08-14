<template>
  <v-app>
    <v-main :style="mainStyle">
      <v-container fluid class="ma-0 pa-0 fill-height">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import backgroundImage from './assets/background-image.jpg'
export default {
  name: 'App',

  components: {},

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
    },
  }),
}
</script>
<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
