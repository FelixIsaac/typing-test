<template>
  <mdb-card>
    <mdb-card-body>
      <mdb-card-title>
        Theme
      </mdb-card-title>
      <mdb-card-text>
        <p v-for="(theming, index) in convert" v-bind:key="index">
          {{ theming.word }}:
          <span
            v-bind:id="theming.key"
            v-bind:style="{ color: theming.key.split('.').reduce((a, b) => a[b], theme) }"
            v-on:click="togglePicker($event.target.id)"
          >
            {{ theming.key.split('.').reduce((a, b) => a[b], theme) }}
          </span>
        </p>
        <Chrome
          v-if="pickerShown"
          v-bind:value="selectedPicker.split('.').reduce((a, b) => a[b], theme)"
          v-on:input="updateSelector($event.hex)"
        />
      </mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
} from 'mdbvue';
import { Chrome } from 'vue-color';

export default {
  name: 'wordLength',
  components: {
    mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, Chrome,
  },
  props: {
    initTheme: {
      commandCenterBody: String,
      input: String,
      words: {
        incorrect: String,
        correct: String,
        untyped: String,
      },
      quickSettings: String,
      selectedQuickSetting: String,
      result: String,
      redoBtn: {
        body: String,
        text: String,
      },
    },
  },
  data() {
    return {
      pickerShown: false,
      selectedPicker: '',
      theme: { ...this.initTheme },
    };
  },
  methods: {
    togglePicker(id) {
      if (id === this.selectedPicker || !this.pickerShown) this.pickerShown = !this.pickerShown;
      this.selectedPicker = id;
    },
    updateSelector(hex) {
      // me begin lazy
      if (this.selectedPicker.split('.').length > 1) this.theme[this.selectedPicker.split('.')[0]][this.selectedPicker.split('.')[1]] = hex;
      else this.theme[this.selectedPicker] = hex;
    },
    log(...f) {
      console.log(...f);
    },
  },
  computed: {
    convert() {
      const result = [];

      function convertToArray(object, prefix = '') {
        Object.keys(object).forEach((key) => {
          if (!object[key]) return;

          if (typeof object[key] === 'object') convertToArray(object[key], prefix ? `${prefix}.${key}` : key);
          else {
            let word = key[0].toUpperCase() + key.slice(1);
            if (prefix) word = `${prefix[0].toUpperCase() + prefix.slice(1)}${word}`;
            result.push({
              word: word.match(/[A-Z][a-z]+/g).join(' ').replace('Btn', 'Button'),
              key: prefix ? `${prefix}.${key}` : key,
            });
          }
        });
      }

      convertToArray(this.theme);
      return result;
    },
  },
  updated() {
    const key = this.selectedPicker;
    if (!key) return;

    this.$emit('set', {
      key,
      value: this.selectedPicker.split('.').reduce((a, b) => a[b], this.theme),
    });
  },
};
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
