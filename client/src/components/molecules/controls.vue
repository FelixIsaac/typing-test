<template>
  <div>
    <mdb-input
      spellcheck="false"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      tabindex="1"
      v-bind:style="{ direction: 'ltr', backgroundColor: theme.input}"
      autofocus
      v-model="inputWord"
      v-on:input="setText($event)"
    >
      <button
        size="md"
        slot="append"
        v-bind:style="{ backgroundColor: theme.redoBtn.body, color: theme.redoBtn.text }"
        class="btn btn-md ripple-parent m-0 px-3 py-2"
      >
        Redo
      </button>
      <button
        size="md"
        slot="append"
        v-on:click="$emit('settings')"
        v-bind:style="{ backgroundColor: theme.settings.body, color: theme.settings.text }"
        class="btn btn-md ripple-parent m-0 px-3 py-2"
      >
        <mdb-icon icon="cog"/>
      </button>
    </mdb-input>
  </div>
</template>

<script>
import { mdbInput, mdbIcon } from 'mdbvue';

export default {
  name: 'controls',
  components: {
    mdbInput, mdbIcon,
  },
  props: {
    theme: {
      input: String,
      redoBtn: {
        body: String,
        text: String,
      },
      settings: {
        body: String,
        text: String,
      },
    },
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
