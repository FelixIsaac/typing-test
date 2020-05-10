<template>
  <mdb-card>
    <mdb-card-body>
      <mdb-card-title>
        Word length
      </mdb-card-title>
      <mdb-card-text>
        <div class="input-group mb-3">
          <div class="input-group-prepend mr-2" style="font-size: 16px">
            Only give words
          </div>
          <label>
            <select class="browser-default custom-select" v-model="selectOnly">
              <option selected>below</option>
              <option>exact</option>
              <option>above</option>
            </select>
          </label>
          <span>
            <mdb-input
              type="number"
              v-bind:min="1"
              v-bind:max="16"
              v-model.number="length"
              v-on:input="$emit('select', {
                key: 'length',
                value: $event
              })"
              outline
              noWrapper
              class="ml-2"
            />
          </span>
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
  mdbInput,
} from 'mdbvue';

export default {
  name: 'wordLength',
  components: {
    mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbInput,
  },
  props: {
    initLength: Number,
    initSelectOnly: String,
  },
  data() {
    return {
      length: this.initLength,
      selectOnly: this.initSelectOnly,
    };
  },
  updated() {
    this.$emit('set', {
      key: 'length',
      value: this.length,
    });

    this.$emit('set', {
      key: 'selectOnly',
      value: this.selectOnly,
    });
  },
};
</script>
