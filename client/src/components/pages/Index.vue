<template>
  <div>
    <command-center
      v-bind:settings="settings"
      v-bind:theme="theme"
      v-bind:result="result"
      v-on:set="setSettings($event)"
      v-on:start="start()"
      v-on:end="end()"
      v-on:settings="toggleSettings()"
      v-on:redo="redo()"
      v-on:character="result.characters += 1"
    />
    <settings
      v-on:close="settings.open = false"
      v-on:save="save($event)"
      v-on:cancel="cancel()"
      v-bind:initOpen="settings.open"
      v-bind:initTheme="theme"
      v-bind:initSettings="settings"
    />
  </div>
</template>

<script>
import axios from 'axios';
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
      settings: this.$cookies.get('settings'),
      theme: this.$cookies.get('theme'),
      result: {
        words: [],
        characters: 0,
        seconds: 0,
      },
      started: false,
      interval: null,
    };
  },
  methods: {
    setSettings(event) {
      this.save({
        settings: {
          ...this.settings,
          [event.type]: event.value,
        },
        theme: this.theme,
      });
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

      this.$cookies.set('settings', props.settings);
      this.$cookies.set('theme', props.theme);
      this.$emit('setBackground', this.theme.mainPage);
      this.generate();
    },
    cancel() {
      this.settings.open = false;

      this.settings = this.$cookies.get('settings');
      this.theme = this.$cookies.get('theme');
    },
    generate() {
      axios.get(`${process.env.VUE_APP_BASE_API}generate`, {
        params: {
          length: this.settings.words,
          punctuation: this.settings.punctuation,
          caps: this.settings.caps,
          wordLength: this.settings.wordLength.length,
          wordSelect: this.settings.wordLength.selectOnly,
        },
      })
        .then(({ data }) => {
          if (data.error) return console.error(data.error);
          if (!data.response) return 'No response';

          this.result.words = data.response.map((word) => ({
            wrong: false, typed: false, word, newWord: '',
          }));
          return console.log('Imported data from server');
        })
        .catch(console.error);
    },
    redo() {
      this.result.seconds = 0;
      this.result.characters = 0;

      this.end();
      this.generate();
    },
  },
  beforeCreate() {
    let settingsCookie = this.$cookies.get('settings');
    let themeCookie = this.$cookies.get('theme');

    if (!settingsCookie) {
      settingsCookie = this.$cookies.set('settings', {
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
      });
    }

    if (!themeCookie) {
      themeCookie = this.$cookies.set('theme', {
        mainPage: '#464746',
        commandCenterBody: '#63696A',
        input: '#6F7778',
        matrix: '#FF8700',
        quickSettings: '#FFAC00',
        redoBtn: {
          body: '#6F7778',
          text: '#A698C5',
        },
        result: '#987da3',
        selectedQuickSetting: '#A698C5',
        settings: {
          body: '#A698C5',
          text: '#6F7778',
        },
        words: {
          correct: '#93C247',
          incorrect: '#EA4221',
          untyped: '#C8C3B8',
          current: '#A698C5',
        },
      });
    }

    this.$emit('setBackground', this.$cookies.get('theme').mainPage);
  },
  created() {
    this.generate();
  },
};
</script>
