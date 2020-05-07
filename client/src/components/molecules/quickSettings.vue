<template>
  <div>
    <timer
      v-show="mode === 'timer'"
      v-on:setTime="$emit('set', { value: $event, type: 'seconds' })"
    />
    <words
      v-show="mode === 'words'"
      v-on:setTime="$emit('set', { value: $event, type: 'words' })"
    />
  </div>
</template>

<script>
import timer from '../atoms/quickSettings/timer.vue';
import words from '../atoms/quickSettings/words.vue';

export default {
  name: 'quickSettings',
  props: ['mode'],
  components: {
    timer, words,
  },
};
</script>

<style scoped>

</style>
