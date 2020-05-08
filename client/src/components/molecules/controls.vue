<template>
  <div>
    <mdb-input
      spellcheck="false"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      tabindex="1"
      style="direction: ltr;"
      autofocus
      v-model="inputWord"
      v-on:input="setText($event)"
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
  components: {
    mdbInput, mdbBtn, mdbIcon,
  },
  data() {
    return {
      inputWord: '',
    };
  },
  methods: {
    setText(word) {
      this.$emit('start');
      const key = word[word.length - 1];

      if (key && key.startsWith(' ')) {
        this.inputWord = '';
        this.$emit('nextWord', word);
      }
    },
  },
};
</script>
