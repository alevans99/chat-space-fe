<template>
  <v-container id="menu-page">
    <h1 class="menu-title white--text ma-10">Find Your Chat Space</h1>
    <div
      class="
        menu-items-container
        d-flex
        flex-column flex-nowrap
        align-center
        mt-16
        justify-space-between
      "
    >
      <v-text-field
        label="Enter Name"
        class="white menu-item font-weight-light pa-0 ma-10"
        placeholder="Choose a name to display"
        single-line
        rounded
        hide-details="auto"
        height="80px"
      ></v-text-field>
      <div
        class="
          menu-buttons-container
          d-flex
          flex-column flex-nowrap
          align-center
        "
      >
        <v-btn
          class="menu-item menu-button font-weight-light ma-5"
          rounded
          color="black"
          dark
          height="70px"
        >
          Create New Space
        </v-btn>
        <v-btn
          class="menu-item menu-button font-weight-light ma-5"
          rounded
          color="black"
          dark
          height="70px"
        >
          Join Existing Space
        </v-btn>
      </div>
    </div>

    <!-- Attribution Links -->
    <div class="attribution">
      <div
        class="attribution-links d-flex flex-wrap justify-center text-center"
      >
        <a
          class="attribution-link ma-2"
          href="https://www.flaticon.com/free-icons/message"
          title="icons attribution"
          >Icons From Flaticon</a
        >
        <a
          class="attribution-link ma-2"
          href="https://www.unsplash.com"
          title="background attribution"
          >Background Image From Unsplash</a
        >
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'menu-page',

  data: () => ({}),
}
</script>
<style scoped>
#menu-page {
  z-index: 2;
}
::v-deep.menu-title {
  font-family: 'ABeeZee', sans-serif;
  font-size: 8vw;
  text-align: center;
  line-height: 1;
}

.menu-item {
  width: 500px;
  text-transform: unset !important;
  font-size: 1.6rem;
}
::v-deep label {
  font-size: 1.6rem !important;
}
.menu-button {
  border: 1px white solid !important;
}

.attribution {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.attribution-links .attribution-link {
  color: rgba(255, 255, 255, 0.615);
  text-decoration: none;
}
</style>
