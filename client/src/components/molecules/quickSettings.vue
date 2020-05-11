<template>
  <div>
    <timer
      v-show="mode === 'timer'"
      v-on:setTime="$emit('set', { value: $event, type: 'seconds' })"
      v-bind:setSeconds="setSeconds"
      v-bind:currSeconds="currSeconds"
      v-bind:theme="theme"
    />
    <words
      v-show="mode === 'words'"
      v-on:setTime="$emit('set', { value: $event, type: 'words' })"
      v-bind:theme="theme"
    />
  </div>
</template>

<script>
import timer from '../atoms/quickSettings/timer.vue';
import words from '../atoms/quickSettings/words.vue';

export default {
  name: 'quickSettings',
  props: ['mode', 'setSeconds', 'currSeconds', 'theme'],
  components: {
    timer, words,
  },
};
</script>
