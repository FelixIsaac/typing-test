<template>
  <div>
    <timer v-show="mode === 'timer'"/>
    <words v-show="mode === 'words'"/>
  </div>
</template>

<script>
  import timer from '../atoms/quickSettings/timer'
  import words from '../atoms/quickSettings/words'

  export default {
    name: "quickSettings",
    components: {
      timer, words
    },
    props: ['mode']
  }
</script>

<style scoped>

</style>
