<template>
  <mdb-card>
    <mdb-card-body>
      <mdb-card-title>
        Measurement
      </mdb-card-title>
      <mdb-card-text>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="check-measurement"
            v-model="mode"
            v-on:change="$emit('select', {
              key: 'measurement',
              value: $event
            })"
          />
          <label
            class="custom-control-label"
            for="check-measurement"
          >
            Use WPS instead of WPM
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="time-measurement"
            v-model="measurement"
            v-on:change="$emit('select', {
              key: 'mode',
              value: $event
            })"
          />
          <label
            class="custom-control-label"
            for="time-measurement"
          >
            Use timer instead of words
          </label>
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
  name: 'measurement',
  components: {
    mdbCard, mdbCardBody, mdbCardTitle, mdbCardText,
  },
  props: {
    initMode: Boolean,
    initMeasurement: Boolean,
  },
  data() {
    return {
      mode: this.initMode,
      measurement: this.initMeasurement,
    };
  },
};
</script>
