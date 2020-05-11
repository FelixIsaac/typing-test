<template>
  <div class="bar">
    <quick-settings
      v-bind:mode="settings.mode"
      v-on:set="$emit('set', $event)"
      v-bind:setSeconds="settings.seconds"
      v-bind:currSeconds="result.seconds"
      v-bind:theme="theme"
    />
    <matrix
      v-bind:measurement="settings.measurement"
      v-bind:words="result.words"
      v-bind:seconds="result.seconds"
      v-bind:theme="theme"
    />
  </div>
</template>

<script>
import quickSettings from '../molecules/quickSettings.vue';
import matrix from '../molecules/matrix.vue';

export default {
  name: 'bar',
  props: ['settings', 'result', 'theme'],
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
