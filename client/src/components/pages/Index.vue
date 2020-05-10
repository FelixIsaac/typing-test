<template>
  <div>
    <command-center
      v-bind:settings="settings"
      v-bind:result="result"
      v-on:set="setSettings($event)"
      v-on:start="start()"
      v-on:end="end()"
      v-on:settings="toggleSettings()"
    />
    <settings
      v-on:close="settings.open = false"
      v-on:save="save($event)"
      v-bind:initOpen="settings.open"
      v-bind:initTheme="theme"
      v-bind:initSettings="settings"
    />
  </div>
</template>

<script>
import commandCenter from '@/components/templates/commandCenter.vue';
import settings from '@/components/organisms/settings.vue';

export default {
  name: 'Index',
  components: {
    commandCenter,
    settings,
  },
  data() {
    return {
      settings: {
        measurement: 'wpm',
        mode: 'timer',
        punctuation: false,
        caps: true,
        redoHotkey: 'alt+r',
        wordLength: {
          length: 7,
          selectOnly: 'below',
        },
        seconds: 60,
        words: 50,
        open: false,
      },
      theme: {
        mainPage: '#FFF53d',
        commandCenterBody: '#00FF00',
        input: '#FF0000',
        words: {
          incorrect: '#0000FF',
          correct: '#FF00FF',
          untyped: '#00FFFF',
        },
        quickSettings: '#FFFF00',
        selectedQuickSetting: '#1daf81',
        result: '#987da3',
        redoBtn: {
          body: '#43ddfa',
          text: '#b4bf46',
        },
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
    toggleSettings() {
      this.settings.open = !this.settings.open;
    },
    save(props) {
      this.settings.open = false;
      this.settings = props.settings;
      this.theme = props.theme;

      if (props.settings.wordLength.length > 16) this.settings.wordLength.length = 16;
      if (props.settings.wordLength.length < 1) this.settings.wordLength.length = 1;
    },
  },
};
</script>
