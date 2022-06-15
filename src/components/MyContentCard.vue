<template>

  <div class="my-content-card">

    <ul>

      <li>{{contentObject.title}}</li>
      <li>{{contentObject.original_title}}</li>
      <li><lang-flag :iso="contentObject.original_language" /></li>
      <li>{{contentObject.vote_average}}</li>
    </ul>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'MyContentCard',
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

.my-content-card{
    color: white;
    margin-bottom: 15px;
}
</style>
