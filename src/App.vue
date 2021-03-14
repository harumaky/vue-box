<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-container>
        <h3 class="mb-3">便利リンク</h3>
        <ul>
          <li v-for="(item, idx) in goodLinks" :key="idx" class="mb-2">
            <a :href="item[1]" target="_blank">{{ item[0] }}</a>
          </li>
        </ul>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app class="primary header">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Box - 遊び場</v-toolbar-title>
      <div class="header__cnt ml-auto d-flex align-center">
        <v-tooltip left allow-overflow>
          <template v-slot:activator="{ on, attrs }">
            <v-switch
              @click="changeTheme"
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
      <Intro ref="intro"/>
      <div class="mb-15"></div>
      <Boxes />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Intro from "./components/Intro.vue";
import Boxes from "./components/Boxes.vue";

export default Vue.extend({
  name: "App",

  components: {
    Intro,
    Boxes
  },

  data: () => ({
    drawer: false,
    bgcolor: "#ffffff",
    goodLinks: [
      ["アイコン検索（mdi-）", "https://vuetifyjs.com/ja/features/icon-fonts/"],
      [".d-系", "https://vuetifyjs.com/ja/styles/display/"],
      ["margin/padding", "https://vuetifyjs.com/ja/styles/spacing/"],
      [
        "タイポグラフィ",
        "https://vuetifyjs.com/ja/styles/text-and-typography/"
      ],
      ["トランジション", "https://vuetifyjs.com/ja/styles/transitions/"]
    ]
  }),

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.bgcolor = this.bgcolor === "#ffffff" ? "#121212" : "#ffffff";
      (this.$refs.intro as Vue & {changeTheme: (p: string) => void}).changeTheme(this.bgcolor);
    }
  }
});
</script>

<style lang="scss">
a:hover {
  opacity: 0.72;
}
.header {
  &__cnt {
    .v-input__control {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
}
</style>
