<template>
  <v-container>
    <h1 class="menu-title white--text ma-10">Find Your Chat Space</h1>
    <div id="menu-container">
      <div
        class="
          menu-items-container
          d-flex
          flex-column flex-nowrap
          align-center
          mt-6 mt-md-10 mt-lg-16
          justify-space-between
        "
      >
        <v-text-field
          label="Your Name"
          class="white menu-item font-weight-light pa-0 ma-4 ma-md-6 ma-lg-10"
          placeholder="Choose a name to display"
          single-line
          rounded
          hide-details="auto"
          :height="menuItemHeight"
          v-model="usernameInput"
        ></v-text-field>
      </div>
      <v-scroll-y-reverse-transition hide-on-leave>
        <div
          class="
            menu-items-container
            d-flex
            flex-column flex-nowrap
            align-center
            mt-6 mt-md-10 mt-lg-16
            justify-space-between
          "
          v-if="!showSpaceName"
        >
          <div
            class="
              menu-buttons-container
              d-flex
              flex-column flex-nowrap
              align-center
            "
          >
            <v-btn
              class="menu-item menu-button font-weight-light ma-2 ma-md-5"
              rounded
              color="black"
              dark
              :height="menuItemHeight"
              :disabled="usernameInput === ''"
              @click="handleCreateRoom"
            >
              Create New Space
            </v-btn>
            <v-btn
              class="menu-item menu-button font-weight-light ma-2 ma-md-5"
              rounded
              color="black"
              dark
              :height="menuItemHeight"
              :disabled="usernameInput === ''"
              @click="showSpaceName = true"
            >
              Join Existing Space
            </v-btn>
          </div>
        </div>
      </v-scroll-y-reverse-transition>
      <v-scroll-y-reverse-transition hide-on-leave>
        <div
          class="
            menu-items-container
            d-flex
            flex-column flex-nowrap
            align-center
            justify-space-between
          "
          v-if="showSpaceName"
        >
          <v-text-field
            label="Existing Space Name"
            class="white menu-item font-weight-light pa-0 mb-6 mb-md-10"
            placeholder=""
            single-line
            rounded
            hide-details="auto"
            :height="menuItemHeight"
            v-model="spaceNameInput"
          ></v-text-field>
          <v-btn
            class="menu-item menu-button font-weight-light ma-2 ma-md-5"
            rounded
            color="black"
            dark
            :height="menuItemHeight"
            :disabled="usernameInput === '' || spaceNameInput === ''"
            @click="handleJoinExistingRoom"
          >
            Join
          </v-btn>
          <v-btn
            class="menu-item menu-button font-weight-light ma-2 ma-md-5"
            rounded
            color="black"
            dark
            :height="menuItemHeight"
            @click="showSpaceName = false"
          >
            Back
          </v-btn>
        </div>
      </v-scroll-y-reverse-transition>
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
import { createNewRoom, checkRoomStatus } from '../../../api/api'
import { mapActions, mapState } from 'vuex'
import router from '@/router'
export default {
  name: 'menu-page',

  data: () => ({
    spaceNameInput: '',
    showSpaceName: false,
  }),
  computed: {
    ...mapState(['socketId', 'username', 'clientId']),
    menuItemHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '50px'
        case 'sm':
          return '60px'
        case 'md':
          return '70px'
        case 'lg':
          return '70px'
        case 'xl':
          return '70px'
        default:
          return '50px'
      }
    },
    usernameInput: {
      get() {
        return this.username
      },
      set(value) {
        this.updateUsername({ username: value })
      },
    },
  },
  methods: {
    ...mapActions(['updateRoom', 'updateUsername']),
    async handleCreateRoom() {
      const room = await createNewRoom(this.username, this.clientId)
      this.updateRoom({ room })
      router.push({ name: 'chat', params: { room } })
    },
    async handleJoinExistingRoom() {
      const room = this.spaceNameInput
      const roomStatus = await checkRoomStatus(room)
      if (roomStatus) {
        this.updateRoom({ room })
        router.push({ name: 'chat', params: { room } })
      }
    },
  },
}
</script>
<style scoped>
#menu-container {
  z-index: 2 !important;
}
:deep(.menu-title) {
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
:deep(label) {
  font-size: 1.6rem !important;
  display: flex;
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  justify-content: center;
  align-items: center;
  max-width: 100% !important;
}
:deep(input) {
  font-size: 1.6rem !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  text-align: center;
}

:deep(.v-input__slot) {
}

.menu-button {
  border: 1px white solid !important;
}

.attribution {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0 !important;
  line-height: 0.5;
}
.attribution-links .attribution-link {
  color: rgba(255, 255, 255, 0.615);
  text-decoration: none;
  z-index: 0 !important;
}

@media only screen and (max-width: 1080px) {
  :deep(.menu-title) {
    font-size: 8vw;
  }
  .menu-item {
    width: 400px;
    font-size: 1.2rem;
  }

  :deep(label),
  :deep(input) {
    font-size: 1.2rem !important;
  }
}

@media only screen and (max-width: 800px) {
  :deep(.menu-title) {
    font-size: 8vw;
  }
  .menu-item {
    width: 320px;
    font-size: 1.1rem;
  }
  :deep(label),
  :deep(input) {
    font-size: 1.1rem !important;
  }
}

@media only screen and (max-width: 600px) {
  :deep(.menu-title) {
    font-size: 14vw;
  }
  .menu-item {
    width: 300px;
    font-size: 1rem;
  }
  :deep(label),
  :deep(input) {
    font-size: 1rem !important;
  }
  .attribution {
    font-size: 0.6rem;
  }
}
</style>
