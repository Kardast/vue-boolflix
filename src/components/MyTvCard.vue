<template>

  <div class="my-tv-card">

    <ul class="tv-card-wrapper">
      
      <div class="my-poster">

        <img :src="'https://image.tmdb.org/t/p/w342/' + contentObject.poster_path" :alt="contentObject.title">
      </div>

      <div class="my-description">

        <li>{{contentObject.name}}</li>
        <li>{{contentObject.original_name}}</li>
        <li><lang-flag :iso="contentObject.original_language" /></li>
        <!-- <li>{{Math.round(contentObject.vote_average / 2)}}</li> -->
        <i v-for="(star, index) in Math.round(contentObject.vote_average / 2)" :key="index"><font-awesome-icon icon="fa-solid fa-star" /></i>
        <i v-for="(star, index) in Math.round(5 - contentObject.vote_average / 2)" :key="index + 5"><font-awesome-icon icon="fa-regular fa-star" /></i>
      </div>
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
    width: calc(100% / 3);
    height: 100%;

    .tv-card-wrapper{
      padding-top: 20px;

      .my-poster{
        display: flex;
        justify-content: center;
        height: 500px;

        img{
          width: 350px;
        }
      }
    }
}
</style>
