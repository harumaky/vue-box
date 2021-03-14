<template>
  <div class="intro">
    <v-parallax
      src="/img/sea.jpg"
      height="400"
      class="intro__parallax"
    >
      <v-container>
        <v-row class="text-center text--primary">
          <v-col class="mb-4">
            <h1 class="text-h1 mb-3">
              Box
            </h1>

            <p class="subheading font-weight-regular">
              VueとVuetifyのいろいろ
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <div class="intro__waves" :style="{height: waveHeight + 'px'}">
      <div class="intro__waves-wrapper">
        <canvas id="wave-canvas1"></canvas>
        <canvas id="wave-canvas2"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Wave } from "@/script/wave"

export default Vue.extend({
  name: "Intro",

  data: () => ({
    waveHeight: 100,
    waves: [] as Wave[]
  }),

  mounted () {
    const waveParam1 = {
      id: "wave-canvas1",
      height: this.waveHeight,
      color: "#ffffff",
      alpha: 1, 
      unit: 100, 
      zoom: 3, 
      delay: 0
    }
    const waveParam2 = {
      id: "wave-canvas2",
      height: this.waveHeight,
      color: "#ffffff",
      alpha: 0.6, 
      unit: 100, 
      zoom: 3, 
      delay: 0.5
    }
    
    this.waves = [new Wave(waveParam1), new Wave(waveParam2)]
    this.waves.forEach(wave => wave.draw())

  },

  methods: {
    changeTheme(color: string) {
      this.waves.forEach(wave => wave.color = color)
    }
  }
});
</script>

<style lang="scss" scoped>
.intro {
  position: relative;


  &__waves {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    width: 100%;

    &-wrapper {
      height: 100%;
      width: 100%;
      position: relative;
      > canvas {
        position: absolute;
        top: 0; left: 0;
      }
    }
  }
}
</style>

<style lang="scss">
.v-application.theme--dark {
  .intro__parallax {
    img {
      filter: brightness(70%);
    }
  }
}
</style>