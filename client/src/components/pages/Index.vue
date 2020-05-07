<template>
  <div>
    <command-center
      v-bind:settings="settings"
      v-bind:result="result"
      v-on:set="setSettings($event)"
    />
  </div>
</template>

<script>
import commandCenter from '@/components/templates/commandCenter.vue';

export default {
  name: 'Index',
  components: {
    commandCenter,
  },
  data() {
    return {
      settings: {
        mode: 'timer',
        measurement: 'wps',
        seconds: 60,
        words: 50,
      },
      result: {
        wordsTyped: {
          incorrect: 5,
          correct: 95,
        },
        seconds: 82,
      },
    };
  },
  methods: {
    setSettings(event) {
      this.settings[event.type] = event.value;
      return this.settings;
    },
  },
};
</script>

<style scoped>

</style>
