<template>
  <mdb-card>
    <mdb-card-body>
      <mdb-card-title>
        Word length
      </mdb-card-title>
      <mdb-card-text>
        Only give words
        <mdb-select v-model="options" v-on:getValue="$emit('select', {
          key: 'selectOnly',
          value: $event
        })"/>
        <mdb-input
          type="number"
          v-bind:min="1"
          v-bind:max="16"
          v-model:="length"
          outline
        />
      </mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbSelect, mdbInput } from 'mdbvue';

export default {
  name: 'wordLength',
  props: {
    length: Number,
    selectOnly: [{
      text: String,
      value: String,
      selected: Boolean
    }],
  },
  components: {
    mdbCard, mdbCardBody, mdbCardTitle, mdbCardText,
  },
};
</script>
