<template>
  <div>
    <span v-on:click="$emit('setWords')">10</span>
    <text>/</text>
    <span v-on:click="$emit('setWords')">25</span>
    <text>/</text>
    <span v-on:click="$emit('setWords')">50</span>
    <text>/</text>
    <span v-on:click="$emit('setWords')">100</span>
    <text>/</text>
    <span v-on:click="$emit('setWords')">200</span>
    <text>/</text>
    <span v-on:click="$emit('setWords')">300</span>
  </div>
</template>

<script>
  export default {
    name: "words"
  }
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
