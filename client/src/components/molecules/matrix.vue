<template>
  <div>
    <template>
      <span v-show="measurement === 'wps'">
        WPS: {{ (correctWords / seconds).toFixed(1) }}
      </span>
      <span v-show="measurement === 'wpm'">
        WPM: {{ (correctWords / (seconds / 60)).toFixed(1) }}
      </span>
    </template>
    <span>/ ACC: {{ (((correctWords - incorrectWords) / totalTyped) * 100).toFixed(1) }}%</span>
  </div>
</template>

<script>
export default {
  name: 'matrix',
  props: {
    measurement: String,
    words: [],
    seconds: Number,
  },
  computed: {
    totalTyped() {
      return this.incorrectWords + this.correctWords;
    },
    correctWords() {
      return this.words.filter(({ wrong }) => !wrong).length;
    },
    incorrectWords() {
      return this.words.filter(({ wrong }) => wrong).length;
    },
  },
};
</script>
