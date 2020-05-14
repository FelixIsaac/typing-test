<template>
  <mdb-container>
    <div class="command-center mt-5">
      <bar
        v-bind:settings="settings"
        v-bind:theme="theme"
        v-bind:result="result"
        v-on:set="$emit('set', $event)"
      />
      <mdb-card id="typing-area" v-bind:style="{ backgroundColor: theme.commandCenterBody }">
        <mdb-card-body>
          <div
            class="text-area text-monospace"
            style="display: block; height: 2.6rem; direction: ltr;"
            ref="words"
          >
            <span
              v-for="(word, key) in result.words"
              v-bind:key="key"
              v-bind:style="{
                'color': word.wrong && word.typed ? theme.words.incorrect :
                  !word.wrong && word.typed ? theme.words.correct :
                  result.words[key - 1] ?
                  (result.words[key -1].typed ? theme.words.current : theme.words.untyped) :
                  theme.words.current
              }"
            >
              {{ word.word }}
            </span>
          </div>
          <controls
            v-on:nextWord="nextWord($event)"
            v-on:start="$emit('start')"
            v-on:settings="$emit('settings')"
            v-on:redo="redo()"
            v-on:character="$emit('character')"
            v-bind:theme="theme"
            v-bind:result="result"
            v-bind:settings="settings"
          />
        </mdb-card-body>
      </mdb-card>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbCard, mdbCardBody } from 'mdbvue';
import bar from '../organisms/bar.vue';
import controls from '../molecules/controls.vue';

export default {
  name: 'commandCenter',
  props: {
    settings: {
      mode: String,
      measurement: String,
      seconds: Number,
      words: Number,
    },
    result: {
      words: [{
        wrong: Boolean,
        typed: Boolean,
        word: String,
      }],
      seconds: Number,
      characters: Number,
    },
    word: {
      wrong: Boolean,
      typed: Boolean,
      word: String,
    },
    theme: {
      commandCenterBody: String,
      input: String,
      words: {
        incorrect: String,
        correct: String,
        untyped: String,
      },
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
  components: {
    bar,
    mdbContainer,
    mdbCard,
    mdbCardBody,
    controls,
  },
  methods: {
    nextWord(word) {
      if (!word) return;

      const index = this.result.words.findIndex(({ typed }) => !typed);
      const Word = word.trim();

      if (!this.result.words[index]) return;

      // update text
      if (Word === this.result.words[index].word) {
        this.result.words[index] = {
          wrong: false,
          typed: true,
          word: this.result.words[index].word,
          newWord: Word,
        };
      } else {
        this.result.words[index] = {
          wrong: true,
          typed: true,
          word: this.result.words[index].word,
          newWord: Word,
        };
      }

      const words = this.$refs.words.childNodes;

      if (!this.result.words.filter(({ typed: t }) => !t).length) {
        // check if user completed text, no more words to be typed, end typing test
        if (this.settings.mode === 'words') this.$emit('end');
        for (let i = 0; i < words.length; i += 1) words[i].style.display = '';
      } else {
        // check if it is needed to update to next line
        const { top: currentWordSize } = words[index].getBoundingClientRect();
        const { top: nextWordSize } = words[index + 1].getBoundingClientRect();
        if (currentWordSize < nextWordSize) {
          // update next line
          for (let i = 0; i < index + 1; i += 1) words[i].style.display = 'none';
        }
      }

      // check if user is about to finish words before timer is finished
      if (this.result.words.filter(({ typed: t }) => !t).length <= 20 && this.settings.mode === 'timer') this.$emit('loadMore');

      this.$forceUpdate();
    },
    redo() {
      const words = this.$refs.words.childNodes;
      this.$emit('redo');
      for (let i = 0; i < words.length; i += 1) words[i].style.display = '';
    },
  },
};
</script>

<style scoped>
  .command-center {
    margin: auto;
    width: 100%;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-2vh);
  }

  #typing-area {
    margin-top: 1rem;
    padding: 5px;
    border-radius: 0.4rem;
  }

  .card-body {
    display: block;
    height: auto;
    direction: ltr;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: Roboto Mono, sans-serif;
    font-size: 18px;
  }

  .text-area {
    margin-bottom: 1rem;
    overflow: hidden;
    transition: all .4s ease-in-out 0s;
  }
</style>
