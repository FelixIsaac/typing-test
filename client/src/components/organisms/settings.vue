<template>
  <mdb-modal
    size="lg"
    v-bind:show="initOpen"
    v-on:close="save()"
    class="animated zoom"
    elegant
    scrollable
  >
    <mdb-modal-header>
      <mdb-modal-title>
        Settings
      </mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body>
      <mdb-row>
        <mdb-col sm="6">
          <measurement
            v-bind:initMeasurement="settings.measurement === 'wps'"
            v-bind:initMode="settings.mode === 'timer'"
            v-on:select="settings[$event.key] =
              $event.key === 'mode' ? (
                $event.value.target.checked ? 'timer' : 'words'
              ) : (
                $event.value.target.checked ? 'wps' : 'wpm'
              )
            "
          />
          <word-length
            v-bind:initLength="settings.wordLength.length"
            v-bind:initSelectOnly="settings.wordLength.selectOnly"
            v-on:set="settings.wordLength[$event.key] = $event.value"
            class="mt-3"
          />
          <config
            v-bind:initSettings="settings"
            v-on:set="settings = $event"
            class="mt-3"
          />
        </mdb-col>
        <mdb-col sm="6">
          <theme v-bind:initTheme="theme" v-on:set="updateThemeSelect($event)"/>
        </mdb-col>
      </mdb-row>
    </mdb-modal-body>
    <mdb-modal-footer style="justify-content: space-between;">
      <div>
        <mdb-btn size="sm">Export settings</mdb-btn>
        <mdb-btn size="sm">Import settings</mdb-btn>
      </div>
      <div>
        <mdb-btn color="primary" size="sm" v-on:click="save()">Save changes</mdb-btn>
      </div>
    </mdb-modal-footer>
  </mdb-modal>
</template>

<script>
import {
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbRow,
  mdbCol,
} from 'mdbvue';
import measurement from '../molecules/settings/measurement.vue';
import wordLength from '../molecules/settings/wordLength.vue';
import config from '../molecules/settings/config.vue';
import theme from '../molecules/settings/theme.vue';

export default {
  name: 'settings',
  components: {
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbRow,
    mdbCol,
    measurement,
    wordLength,
    config,
    theme,
  },
  props: {
    initOpen: Boolean,
    initSettings: {
      measurement: String,
      mode: String,
      punctuation: Boolean,
      caps: Boolean,
      wordLength: {
        length: Number,
        selectOnly: String,
      },
      seconds: Number,
      words: Number,
      open: Boolean,
    },
    initTheme: {
      commandCenterBody: String,
      input: String,
      words: {
        incorrect: String,
        correct: String,
        untyped: String,
      },
      quickSettings: String,
      selectedQuickSetting: String,
      result: String,
      redoBtn: {
        body: String,
        text: String,
      },
    },
  },
  data() {
    return {
      settings: this.initSettings,
      theme: this.initTheme,
    };
  },
  methods: {
    updateThemeSelect(data) {
      // me begin lazy
      if (data.key.split('.').length > 1) this.theme[data.key.split('.')[0]][data.key.split('.')[1]] = data.value;
      else this.theme[data.key] = data.value;
    },
    save() {
      this.$emit('save', {
        theme: this.theme,
        settings: this.settings,
      });
    },
  },
};
</script>
