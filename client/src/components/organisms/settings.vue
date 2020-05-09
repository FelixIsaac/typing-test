<template>
  <mdb-modal size="lg" v-bind:show="open" v-on:close="open = false">
    <mdb-modal-header>
      <mdb-modal-title>
        Settings
      </mdb-modal-title>
    </mdb-modal-header>
    <mdb-modal-body>
      <mdb-row>
        <mdb-col sm="6">
          <theme v-bind:initTheme="theme"/>
        </mdb-col>
      </mdb-row>
    </mdb-modal-body>
    <mdb-modal-footer>
      <mdb-btn color="secondary" size="sm" v-on:click.native="open = false">Close</mdb-btn>
      <mdb-btn color="primary" size="sm" v-on:click="$emit('save', {
        theme
      })">Save changes</mdb-btn>
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
    theme,
  },
  props: {
    open: Boolean,
    theme: {
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
};
</script>
