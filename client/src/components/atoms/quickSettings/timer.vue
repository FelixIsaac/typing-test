<template>
  <div v-bind:style="{ color: theme.quickSettings }">
    Timer:
    <span
      v-on:click="$emit('setTime', 15)"
      v-bind:style="{
        color: setSeconds === 15 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >15</span>
    /
    <span
      v-on:click="$emit('setTime', 30)"
      v-bind:style="{
        color: setSeconds === 30 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >30</span>
    /
    <span
      v-on:click="$emit('setTime', 60)"
      v-bind:style="{
        color: setSeconds === 60 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >60</span>
    /
    <span
      v-on:click="$emit('setTime', 120)"
      v-bind:style="{
        color: setSeconds === 120 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >120</span>
    /
    <span
      v-on:click="$emit('setTime', 240)"
      v-bind:style="{
        color: setSeconds === 240 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >240</span>
    /
    <span
      v-on:click="$emit('setTime', 360)"
      v-bind:style="{
        color: setSeconds === 360 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >360</span>
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: {
    setSeconds: Number,
    theme: {
      quickSettings: String,
      selectedQuickSetting: String,
    },
  },
};
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
