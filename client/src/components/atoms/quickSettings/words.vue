<template>
  <div>
    <span
      v-on:click="$emit('setTime', 10)"
      v-bind:class="{ 'active': setSeconds === 10 }"
    >10</span>
    /
    <span
      v-on:click="$emit('setTime', 25)"
      v-bind:class="{ 'active': setSeconds === 25 }"
    >25</span>
    /
    <span
      v-on:click="$emit('setTime', 50)"
      v-bind:class="{ 'active': setSeconds === 50 }"
    >50</span>
    /
    <span
      v-on:click="$emit('setTime', 100)"
      v-bind:class="{ 'active': setSeconds === 100 }"
    >100</span>
    /
    <span
      v-on:click="$emit('setTime', 200)"
      v-bind:class="{ 'active': setSeconds === 200 }"
    >200</span>
    /
    <span
      v-on:click="$emit('setTime', 300)"
      v-bind:class="{ 'active': setSeconds === 300 }"
    >300</span>
  </div>
</template>

<script>
export default {
  name: 'words',
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
