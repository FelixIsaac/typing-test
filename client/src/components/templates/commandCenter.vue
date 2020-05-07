<template>
  <mdb-container>
    <div class="command-center mt-5">
      <bar v-bind:settings="settings" v-bind:result="result" v-on:set="$emit('set', $event)"/>
      <mdb-card id="typing-area">
        <mdb-card-body>
          here because ask few program between or those eye move plan go each
          before each so because from little end will line after general
          here up one it some after become before ask then while this own again
          if large leave like follow so ask use many and develop peoples
          <controls v-bind:word="'test'"/>
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
  props: ['settings', 'result'],
  components: {
    bar,
    mdbContainer,
    mdbCard,
    mdbCardBody,
    controls,
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
</style>
