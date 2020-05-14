<template>
  <div>
    <mdb-input
      spellcheck="false"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      tabindex="1"
      autofocus
      v-model="inputWord"
      v-on:input="setText($event)"
      v-bind:style="{ direction: 'ltr', backgroundColor: theme.input }"
      v-bind:disabled="settings.mode === 'timer' ?
        result.seconds >= settings.seconds :
        result.words.filter(({ typed: t }) => t).length + 1 >= settings.words
      "
    >
      <button
        size="md"
        slot="append"
        class="btn btn-md ripple-parent m-0 px-3 py-2"
        v-hotkey="{ [settings.redoHotkey]: { 'keyup': redo } }"
        v-bind:style="{ backgroundColor: theme.redoBtn.body, color: theme.redoBtn.text }"
        v-on:click="redo()"
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
    settings: {
      redoHotkey: String,
    },
    result: {
      started: Boolean,
    },
  },
  data() {
    return {
      inputWord: '',
    };
  },
  methods: {
    setText(word) {
      // start the test and countdown the seconds
      this.$emit('start');
      const key = word[word.length - 1];

      // check if there is spaces at the start
      if (!word.trim().length) {
        this.inputWord = '';
        return;
      }

      if (key && key.startsWith(' ')) {
        // if space, switch to the next word
        this.inputWord = '';
        this.$emit('nextWord', word);
      } else this.$emit('character');
    },
    redo() {
      this.inputWord = '';
      this.$emit('redo');
    },
  },
};
</script>
