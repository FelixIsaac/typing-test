<template>
  <div>
    <template>
      <span v-show="measurement === 'wps'">
        WPS: {{ wordsTyped.correct / seconds }}
      </span>
      <span v-show="measurement === 'wpm'">
        WPM: {{ wordsTyped.correct / (seconds / 60) }}
      </span>
    </template>
    <span>/ ACC: {{ (wordsTyped.incorrect / wordsTyped.total) * 100 }}%</span>
  </div>
</template>

<script>
  export default {
    name: "matrix",
    props: ['measurement', 'wordsTyped', 'seconds']
  }
</script>
