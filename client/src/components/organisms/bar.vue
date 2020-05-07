<template>
  <div class="bar">
    <quick-settings v-bind:mode="settings.mode" v-on:set="$emit('set', $event)"/>
    <matrix
      v-bind:measurement="settings.measurement"
      v-bind:words="result.words"
      v-bind:seconds="result.seconds"/>
  </div>
</template>

<script>
import quickSettings from '../molecules/quickSettings.vue';
import matrix from '../molecules/matrix.vue';

export default {
  name: 'bar',
  props: ['settings', 'result'],
  components: {
    quickSettings, matrix,
  },
};
</script>

<style scoped>
  .bar {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }
</style>
