<template>

  <div class="my-tv-card">

    <ul>

      <li>{{contentObject.name}}</li>
      <li>{{contentObject.original_name}}</li>
      <li><lang-flag :iso="contentObject.original_language" /></li>
      <li>{{contentObject.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'MyTvCard',
  components: {
    LangFlag
  },
  props: {
    contentObject: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.my-tv-card{
    color: white;
    margin-bottom: 15px;
}
</style>
