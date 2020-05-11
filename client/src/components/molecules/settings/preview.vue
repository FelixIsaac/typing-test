<template>
  <mdb-card>
    <mdb-card-header>
      Preview
    </mdb-card-header>
    <mdb-card-body v-bind:style="{ backgroundColor: theme.mainPage }">
      <mdb-card-text>
        <command-center
          v-bind:settings="settings"
          v-bind:theme="theme"
          v-bind:result="result"
        />
      </mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardHeader,
  mdbCardText,
  mdbCardBody
} from 'mdbvue';
import commandCenter from '../../templates/commandCenter.vue';

export default {
  name: "preview",
  components: {
    mdbCard,
    mdbCardHeader,
    mdbCardText,
    mdbCardBody,
    commandCenter,
  },
  props: ['settings', 'theme', 'result']
};
</script>

<style scoped>

</style>
