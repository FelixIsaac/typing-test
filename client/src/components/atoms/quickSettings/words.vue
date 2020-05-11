<template>
  <div>
    <span
      v-on:click="$emit('setTime', 10)"
      v-bind:style="{
        color: setSeconds === 10 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >10</span>
    /
    <span
      v-on:click="$emit('setTime', 25)"
      v-bind:style="{
        color: setSeconds === 25 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >25</span>
    /
    <span
      v-on:click="$emit('setTime', 50)"
      v-bind:style="{
        color: setSeconds === 50 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >50</span>
    /
    <span
      v-on:click="$emit('setTime', 100)"
      v-bind:style="{
        color: setSeconds === 100 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >100</span>
    /
    <span
      v-on:click="$emit('setTime', 200)"
      v-bind:style="{
        color: setSeconds === 200 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >200</span>
    /
    <span
      v-on:click="$emit('setTime', 300)"
      v-bind:style="{
        color: setSeconds === 300 ? theme.selectedQuickSetting ? theme.quickSettings,
      }"
    >300</span>
  </div>
</template>

<script>
export default {
  name: 'words',
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
