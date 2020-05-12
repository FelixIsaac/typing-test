<template>
  <div v-bind:style="{ color: theme.matrix }">
    <template>
      <span v-if="measurement === 'wps'">
        WPS: {{ (((characters / 5) / seconds) || 0).toFixed(1) }}
      </span>
      <span v-else>
        WPM: {{ (((characters / 5) / (seconds / 60)) || 0).toFixed(1) }}
      </span>
    </template>
    <span>
      / ACC: {{ accuracy() }}%
    </span>
  </div>
</template>

<script>
export default {
  name: 'matrix',
  props: {
    measurement: String,
    words: Array,
    seconds: Number,
    characters: Number,
    theme: {
      matrix: String,
    },
  },
  methods: {
    accuracy() {
      // finding the percentage of correct typed words over total typed words
      const typedWords = this.words.filter(({ typed }) => typed).length;
      const acc = (this.correctWords() / typedWords) * 100;

      if (Number.isNaN(acc) || (Math.sign(acc)).valueOf() === -1) return '0.0';
      return acc.toFixed(1).toString();
    },
    correctWords() {
      return this.words.filter(({ wrong, typed }) => !wrong && typed).length;
    },
  },
};
</script>
