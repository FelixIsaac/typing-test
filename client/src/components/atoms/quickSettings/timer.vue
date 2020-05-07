<template>
  <div>
    <span v-on:click="$emit('setTime', 15)">15</span>
    /
    <span v-on:click="$emit('setTime', 30)">30</span>
    /
    <span v-on:click="$emit('setTime', 60)">60</span>
    /
    <span v-on:click="$emit('setTime', 120)">120</span>
    /
    <span v-on:click="$emit('setTime', 240)">240</span>
    /
    <span v-on:click="$emit('setTime', 360)">360</span>
  </div>
</template>

<script>
export default {
  name: 'timer',
};
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
