<template>

  <div class="my-movies-card">

    <ul>

      <img :src="'https://image.tmdb.org/t/p/w342/' + contentObject.poster_path" :alt="contentObject.title">
      <li>{{contentObject.title}}</li>
      <li>{{contentObject.original_title}}</li>
      <li><lang-flag :iso="contentObject.original_language" /></li>
      <!-- <li>{{Math.round(contentObject.vote_average / 2)}}</li> -->
      <i v-for="(star, i) in Math.round(contentObject.vote_average / 2)" :key="i"><font-awesome-icon icon="fa-solid fa-star" /></i>
      <i v-for="(star, k) in Math.round(5 - contentObject.vote_average / 2)" :key="k + 5"><font-awesome-icon icon="fa-regular fa-star" /></i>
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
