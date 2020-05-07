<template>
  <div>
    <mdb-input
      spellcheck="false"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      tabindex="1"
      style="direction: ltr;"
      v-bind:placeholder="word"
    >
      <mdb-btn color="dark" size="md" group slot="append">Redo</mdb-btn>
      <mdb-btn color="white" size="md" group slot="append">
        <mdb-icon icon="cog"/>
      </mdb-btn>
    </mdb-input>
  </div>
</template>

<script>
import { mdbInput, mdbBtn, mdbIcon } from 'mdbvue';

export default {
  name: 'controls',
  props: {
    word: String,
  },
  components: {
    mdbInput, mdbBtn, mdbIcon,
  },
};
</script>
