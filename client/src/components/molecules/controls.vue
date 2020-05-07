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
      v-bind:placeholder="word"
      v-bind:value="inputWord"
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
  props: {
    word: String,
  },
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
      const key = word[word.length - 1];

      console.log(word, key);
      if (key.startsWith(' ')) {
        this.inputWord = '';
        this.$emit('nextWord', word);
      }
    },
  },
};
</script>
