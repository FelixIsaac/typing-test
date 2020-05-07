<template>
  <div>
    <command-center
      v-bind:settings="settings"
      v-bind:result="result"
      v-bind:word="word"
      v-on:nextWord="nextWord($event)"
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
        words: `here because ask few program between or those eye move plan go each
          before each so because from little end will line after general
          here up one it some after become before ask then while this own again
          if large leave like follow so ask use many and develop peoples`.split(' ').map((word) => ({ wrong: false, typed: false, word })),
        seconds: 82,
      },
    };
  },
  methods: {
    setSettings(event) {
      this.settings[event.type] = event.value;
      return this.settings;
    },
    nextWord(word) {
      const filter = ({ word: w, typed }) => !typed && w.trim() === word.trim();
      let element = this.result.words[this.result.words.findIndex(filter)];

      if (word.trim() === this.word.word.trim()) {
        element = {
          wrong: false,
          typed: true,
          word,
        };
      } else {
        element = {
          wrong: true,
          typed: true,
          word,
        };
      }
    },
  },
  computed: {
    word() {
      return this.result.words.filter(({ typed }) => !typed)[0];
    },
  },
};
</script>

<style scoped>

</style>
