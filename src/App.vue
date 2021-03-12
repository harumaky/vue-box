<template>
  <v-app>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer>
    <v-app-bar app class="primary header">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Box - 遊び場</v-toolbar-title>
      <div class="header__cnt ml-auto d-flex align-center">
        <v-tooltip left allow-overflow>
          <template v-slot:activator="{ on, attrs }">
            <v-switch
              v-model="$vuetify.theme.dark"
              v-bind="attrs"
              v-on="on"
              color="white"
              dense
            ></v-switch>
          </template>
          <span>テーマを変更</span>
        </v-tooltip>
       
      </div>
    </v-app-bar>

    <v-main>
      <Intro />
      <Styles />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Intro from "./components/Intro.vue";
import Styles from "./components/Styles.vue";

export default Vue.extend({
  name: "App",

  components: {
    Intro,
    Styles
  },

  data: () => ({
      drawer: false
  })
});
</script>

<style lang="scss">
.header {
  &__cnt {
    .v-input__control {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
}
</style>
