<template>

  <div class="my-movies-card">

    <ul>

      <img :src="'https://image.tmdb.org/t/p/w342/' + contentObject.poster_path" :alt="contentObject.title">
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
  name: 'MyMoviesCard',
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

.my-movies-card{
    color: rgb(160, 134, 134);
    margin-bottom: 15px;
}
</style>
