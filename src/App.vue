<template>
  <div id="app">

    <MyContent/>
  </div>
</template>

<script>
import MyContent from './components/MyContent.vue'

export default {
  name: 'App',
  components: {
    MyContent,
}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(56, 56, 56);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
