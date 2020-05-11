<template>
  <div class="wrapper" v-bind:style="{ backgroundColor }">
    <router-view v-on:setBackground="backgroundColor = $event"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      backgroundColor: '#464746',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

.wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #111;
  position: absolute;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
</style>
