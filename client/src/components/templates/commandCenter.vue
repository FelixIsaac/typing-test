<template>
  <div class="command-center">
    <bar v-bind:settings="settings" v-bind:result="result" v-on:set="$emit('set', $event)"/>
    <md-card id="typing-area">
      <md-card-content>
        here because ask few program between or those eye move plan go each
        before each so because from little end will line after general
        here up one it some after become before ask then while this own again
        if large leave like follow so ask use many and develop people
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import bar from '../organisms/bar.vue';

export default {
  name: 'commandCenter',
  props: ['settings', 'result'],
  components: {
    bar,
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
  }

  #typing-area {
    margin-top: 1rem;
    padding: 5px;
    border-radius: 0.4rem;
  }

  .md-card-content {
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
