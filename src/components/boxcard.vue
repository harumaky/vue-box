<template>
  <v-hover v-slot:default="{ hover }">
    <v-col cols="12" lg="6">
      <v-card :elevation="hover ? 12 : 6" class="box-card transition-swing">
        <div class="box-card__head primary d-flex px-3">
          <v-card-title>{{ title }}</v-card-title>
          <div class="box-card__head-tools ml-auto d-flex align-center">
            <v-dialog 
              v-model="dialog"
              width="500"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  :disabled="!hasmemo"
                  class="mr-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-information-outline</v-icon>
                </v-btn>
              </template>
              <v-card class="dialog__card">
                <v-card-title class="primary">{{ title }}のメモ</v-card-title>
                <v-card-text class="pa-3 text-body-1">
                  <slot name="memo"></slot>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-btn :disabled="!url" class="mr-4">
              <a v-bind:href="url" class="text-decoration-none" target="_blank">
                <v-icon>mdi-open-in-new</v-icon>
              </a>
            </v-btn>
          </div>
        </div>
        <div class="box-card__cnt pa-3">
          <slot></slot>
        </div>
      </v-card>
    </v-col>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },

    url: {
      type: String,
      required: false
    },

    hasmemo: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    dialog: false
  })
});
</script>
