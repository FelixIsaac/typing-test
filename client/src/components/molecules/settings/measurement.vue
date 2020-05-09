<template>
  <mdb-card>
    <mdb-card-body>
      <mdb-card-title>
        Measurement
      </mdb-card-title>
      <mdb-card-text>
        <div>
          <input
            type="checkbox"
            class="custom-control-input"
            id="check-measurement"
            v-model="measurement"
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
        <div>
          <input
            type="checkbox"
            class="custom-control-input"
            id="time-measurement"
            v-model="mode"
            v-on:change="$emit('select', {
              key: 'mode',
              value: $event
            })"
          />
          <label
            class="custom-control-label"
            for="time-measurement"
          >
            Use time instead of words
          </label>
        </div>
      </mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, } from 'mdbvue';

export default {
  name: 'measurement',
  props: {
    mode: Boolean,
    measurement: Boolean,
  },
  components: {
    mdbCard, mdbCardBody, mdbCardTitle, mdbCardText,
  },
};
</script>
