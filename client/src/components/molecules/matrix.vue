<template>
  <div>
    <template>
      <span v-if="measurement === 'wps'">
        WPS: {{ ((correctWords() / seconds) | 0).toFixed(1) }}
      </span>
      <span v-else>
        WPM: {{ ((correctWords() / (seconds / 60)) | 0).toFixed(1) }}
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
  },
  methods: {
    accuracy() {
      const typedWords = this.words.filter(({ typed }) => typed).length;
      const acc = ((this.correctWords() - this.incorrectWords()) / typedWords) * 100;

      if (Number.isNaN(acc) || (Math.sign(acc)).valueOf() === -1) return '0.0';
      return acc.toFixed(1).toString();
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
