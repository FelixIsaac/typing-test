<template>
  <div>
    <template>
      <span v-show="measurement === 'wps'">
        WPS: {{ (wordsTyped.correct / seconds).toFixed(1) }}
      </span>
      <span v-show="measurement === 'wpm'">
        WPM: {{ (wordsTyped.correct / (seconds / 60)).toFixed(1) }}
      </span>
    </template>
    <span>/ ACC: {{ ((wordsTyped.correct - wordsTyped.incorrect) / totalTyped) * 100 }}%</span>
  </div>
</template>

<script>
export default {
  name: 'matrix',
  props: ['measurement', 'wordsTyped', 'seconds'],
  computed: {
    totalTyped() {
      return this.wordsTyped.incorrect + this.wordsTyped.correct;
    },
  },
};
</script>
