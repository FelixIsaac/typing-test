<template>
  <div>
    <command-center
      v-bind:settings="settings"
      v-bind:result="result"
      v-on:set="setSettings($event)"
      v-on:start="start()"
      v-on:end="end()"
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
        measurement: 'wpm',
        seconds: 60,
        words: 50,
      },
      result: {
        words: 'here because ask few program between or those ey move plan go each before'.split(' ').map((word) => ({
          wrong: false, typed: false, word, newWord: '',
        })),
        seconds: 0,
      },
      started: false,
      interval: null,
    };
  },
  methods: {
    setSettings(event) {
      this.settings[event.type] = event.value;
      return this.settings;
    },
    start() {
      if (this.started) return;

      this.started = true;

      this.interval = setInterval(() => {
        this.result.seconds += 1;
        if (this.result.seconds >= this.settings.seconds) {
          clearInterval(this.interval);
          this.started = false;
        }
      }, 1000);
    },
    end() {
      if (!this.started) return;

      this.started = false;
      clearInterval(this.interval);
    },
  },
};
</script>
