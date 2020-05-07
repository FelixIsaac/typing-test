<template>
  <div>
    <span v-on:click="$emit('setTime')">15</span>
    <text>/</text>
    <span v-on:click="$emit('setTime')">30</span>
    <text>/</text>
    <span v-on:click="$emit('setTime')">60</span>
    <text>/</text>
    <span v-on:click="$emit('setTime')">120</span>
    <text>/</text>
    <span v-on:click="$emit('setTime')">240</span>
    <text>/</text>
    <span v-on:click="$emit('setTime')">360</span>
  </div>
</template>

<script>
  export default {
    name: "timer"
  }
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
