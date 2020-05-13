<template>
  <div v-bind:style="{ color: theme.quickSettings }">
    Timer:
    <span
      v-on:click="$emit('setTime', 15)"
      v-bind:style="{
        color: setSeconds === 15 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setSeconds === 15 ? setSeconds - result.seconds : '15' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 30)"
      v-bind:style="{
        color: setSeconds === 30 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setSeconds === 30 ? setSeconds - result.seconds : '30' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 60)"
      v-bind:style="{
        color: setSeconds === 60 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setSeconds === 60 ?  setSeconds - result.seconds : '60' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 120)"
      v-bind:style="{
        color: setSeconds === 120 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setSeconds === 120 ?  setSeconds - result.seconds : '120' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 240)"
      v-bind:style="{
        color: setSeconds === 240 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setSeconds === 240 ?  setSeconds - result.seconds : '240' }}</span>
    /
    <span
      v-on:click="$emit('setTime', 360)"
      v-bind:style="{
        color: setSeconds === 360 ? theme.selectedQuickSetting : theme.quickSettings
      }"
    >{{ setSeconds === 360 ?  setSeconds - result.seconds : '360' }}</span>
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: ['setSeconds', 'result', 'theme'],
};
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
