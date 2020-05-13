<template>
  <div v-bind:style="{ color: theme.quickSettings }">
    Words:
    <span
      v-on:click="$emit('setTime', 10)"
      v-bind:style="{
        color: setWords === 10 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setWords === 10 ?  setWords - words : '10' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 25)"
      v-bind:style="{
        color: setWords === 25 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setWords === 25 ?  setWords - words : '25' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 50)"
      v-bind:style="{
        color: setWords === 50 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setWords === 50 ?  setWords - words : '50' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 100)"
      v-bind:style="{
        color: setWords === 100 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setWords === 100 ?  setWords - words : '100' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 200)"
      v-bind:style="{
        color: setWords === 200 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setWords === 200 ?  setWords - words : '200' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 300)"
      v-bind:style="{
        color: setWords === 300 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setWords === 300 ?  setWords - words : '300' }}</span>
  </div>
</template>

<script>
export default {
  name: 'words',
  props: {
    setWords: Number,
    theme: {
      quickSettings: String,
      selectedQuickSetting: String,
    },
    result: Object,
  },
  computed: {
    words() {
      return this.result.words.filter(({ typed: t }) => t).length;
    },
  },
};
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
