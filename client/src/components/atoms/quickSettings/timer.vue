<template>
  <div>
    <span
      v-on:click="$emit('setTime', 15)"
      v-bind:class="{ 'active': setSeconds === 15 }"
    >15</span>
    /
    <span
      v-on:click="$emit('setTime', 30)"
      v-bind:class="{ 'active': setSeconds === 30 }"
    >30</span>
    /
    <span
      v-on:click="$emit('setTime', 60)"
      v-bind:class="{ 'active': setSeconds === 60 }"
    >60</span>
    /
    <span
      v-on:click="$emit('setTime', 120)"
      v-bind:class="{ 'active': setSeconds === 120 }"
    >120</span>
    /
    <span
      v-on:click="$emit('setTime', 240)"
      v-bind:class="{ 'active': setSeconds === 240 }"
    >240</span>
    /
    <span
      v-on:click="$emit('setTime', 360)"
      v-bind:class="{ 'active': setSeconds === 360 }"
    >360</span>
  </div>
</template>

<script>
export default {
  name: 'timer',
  props: {
    setSeconds: Number,
    currSeconds: Number,
  },
};
</script>

<style scoped>
  span {
    cursor: pointer;
  }

  span.active {
    cursor: default;
    color: bisque;
  }
</style>
