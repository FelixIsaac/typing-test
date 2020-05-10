<template>
  <mdb-card>
    <mdb-card-body>
      <mdb-card-title>
        Config
      </mdb-card-title>
      <mdb-card-text>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="settings-punctuation"
            v-model="settings.punctuation"
          />
          <label
            class="custom-control-label"
            for="settings-punctuation"
          >
            Use punctuation
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="settings-caps"
            v-model="settings.caps"
          />
          <label
            class="custom-control-label"
            for="settings-caps"
          >
            Capital letters
          </label>
        </div>
        <div class="form-group">
          <label for="hotkey">Redo hotkey</label>
          <input
            type="text"
            id="hotkey"
            class="form-control"
            placeholder="alt+r"
            v-model="settings.redoHotkey">
        </div>
      </mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
} from 'mdbvue';

export default {
  name: 'config',
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
  },
  props: {
    initSettings: {
      punctuation: Boolean,
      caps: Boolean,
      redoHotkey: String,
    },
  },
  data() {
    return {
      settings: this.initSettings,
    };
  },
  updated() {
    this.$emit('set', this.settings);
  },
};
</script>
