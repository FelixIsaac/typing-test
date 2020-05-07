<template>
  <div class="bar">
    <quick-settings v-bind:mode="settings.mode"/>
    <matrix measurement="settings.measurement" words-typed="result.wordsTyped" seconds="result.seconds"/>
  </div>
</template>

<script>
  import quickSettings from "../molecules/quickSettings";
  import matrix from "../molecules/matrix";

  export default {
    name: "bar",
    props: ['settings', result],
    components: {
      quickSettings, matrix
    }
  }
</script>

<style scoped>
  .bar {
    display: flex;
    justify-content: space-between;
  }
</style>
