<template>
  <div>
    <span v-on:click="$emit('setWords', 10)">10</span>
    /
    <span v-on:click="$emit('setWords', 25)">25</span>
    /
    <span v-on:click="$emit('setWords', 50)">50</span>
    /
    <span v-on:click="$emit('setWords', 100)">100</span>
    /
    <span v-on:click="$emit('setWords', 200)">200</span>
    /
    <span v-on:click="$emit('setWords', 300)">300</span>
  </div>
</template>

<script>
export default {
  name: 'words',
};
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
