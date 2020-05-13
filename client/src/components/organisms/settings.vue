<template>
  <mdb-modal
    size="lg"
    elegant
    scrollable
    v-bind:show="initOpen"
    v-on:close="$emit('cancel')"
  >
    <mdb-modal-header>
      <mdb-modal-title>
        Settings
      </mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body v-bind:style="{ backgroundColor: initTheme.input }">
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
      <preview
        v-bind:settings="settings"
        v-bind:theme="theme"
        v-bind:result="{
          words,
          seconds: 0,
        }"
        class="mt-3"
      />
    </mdb-modal-body>
    <mdb-modal-footer
      style="justify-content: space-between;"
    >
      <div>
        <mdb-btn
          size="sm"
          color="mdb-color"
          v-on:click="exportSettings()"
        >
          Export settings & themes
        </mdb-btn>
        <label class="btn btn-mdb-color btn-sm ripple-parent">
          <input
            type="file"
            style="display: none;"
            v-on:change="importSettings($event.target.files)"
            accept="application/json"
          >
          <span>Import settings & themes</span>
        </label>
      </div>
      <div>
        <mdb-btn
          size="sm"
          color="elegant"
          v-on:click="$emit('cancel')"
          v-bind:style="{ color: initTheme.selectedQuickSetting }"
        >
          Cancel
        </mdb-btn>
        <mdb-btn
          size="sm"
          color="dark"
          v-on:click="save()"
          v-bind:style="{ color: initTheme.quickSettings }"
        >
          Save changes
        </mdb-btn>
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
import preview from '../molecules/settings/preview.vue';

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
    preview,
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
    words: Array,
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
    exportSettings() {
      const data = JSON.stringify({
        settings: this.settings,
        theme: this.theme,
      });
      const blob = new Blob([data], { type: 'text/plain' });
      const e = document.createEvent('MouseEvents');
      const a = document.createElement('a');
      a.download = 'typing-test.json';
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },
    importSettings(props) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        try {
          // Get btoa data and decode it to JSON string, then parse string to object
          const data = JSON.parse(atob(fileReader.result.split(',')[1]));
          if (data.theme) this.theme = { ...this.theme, ...data.theme };
          if (data.settings) this.settings = { ...this.settings, ...data.settings };
        } catch (err) {
          console.error(err);
        }
      };

      fileReader.readAsDataURL(props[0]);
    },
  },
};
</script>
