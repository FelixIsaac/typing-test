<template>
  <div>
    <template>
      <span v-if="measurement === 'wps'">
        WPS: {{ ((correctWords / seconds) | 0).toFixed(1) }}
      </span>
      <span v-else>
        WPM: {{ ((correctWords / (seconds / 60)) | 0).toFixed(1) }}
      </span>
    </template>
    <span>
      / ACC: {{ ((((correctWords - incorrectWords) / totalTyped) | 0) * 100).toFixed(1) }}%
    </span>
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
      return this.words.filter(({ wrong, typed }) => !wrong && typed).length;
    },
    incorrectWords() {
      return this.words.filter(({ wrong, typed }) => wrong && typed).length;
    },
  },
};
</script>
