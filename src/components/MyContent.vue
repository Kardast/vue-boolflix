<template>
  <div class="my-content">

    <MySearchbar/>

    <ul>
      <li>prova 1
      </li>
    </ul>
  </div>
</template>

<script>
import MySearchbar from './MySearchbar.vue'
export default {
  name: 'MyContent',
  components: {
      MySearchbar
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-content{
  background-color: rgb(90, 38, 38);
  width: 90%;
  height: 90%;
}

</style>
