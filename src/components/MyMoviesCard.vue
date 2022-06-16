<template>

  <div class="my-movies-card">
    <div class="movies-card-wrapper">
      
      <div class="my-poster">

        <img :src="'https://image.tmdb.org/t/p/w342/' + contentObject.poster_path" :alt="contentObject.title">
        <ul class="my-description">
          
          <li>Titolo: <span>{{contentObject.title}}</span></li>
          <li>Titolo originale: <span>{{contentObject.original_title}}</span></li>
          <li>Lingua: <lang-flag :iso="contentObject.original_language" /></li>
          <li>
            Voto: 
            <i v-for="(star, index) in Math.round(contentObject.vote_average / 2)" :key="index"><font-awesome-icon icon="fa-solid fa-star" /></i>
            <i v-for="(star, index) in Math.round(5 - contentObject.vote_average / 2)" :key="index + 5"><font-awesome-icon icon="fa-regular fa-star" /></i>
          </li> 
          <li>Overview: <span>{{contentObject.overview}}</span></li>
        </ul>
      </div>

    </div>

    <!-- <ul>

      <img :src="'https://image.tmdb.org/t/p/w342/' + contentObject.poster_path" :alt="contentObject.title">
      <li>{{contentObject.title}}</li>
      <li>{{contentObject.original_title}}</li>
      <li><lang-flag :iso="contentObject.original_language" /></li>
      <li>{{Math.round(contentObject.vote_average / 2)}}</li>
      <i v-for="(star, i) in Math.round(contentObject.vote_average / 2)" :key="i"><font-awesome-icon icon="fa-solid fa-star" /></i>
      <i v-for="(star, k) in Math.round(5 - contentObject.vote_average / 2)" :key="k + 5"><font-awesome-icon icon="fa-regular fa-star" /></i>
    </ul> -->
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
    color: white;
    margin-bottom: 15px;
    width: calc(100% / 3);
    height: 100%;

    .movies-card-wrapper{
      padding-top: 20px;

      .my-poster{
        display: flex;
        justify-content: center;
        height: 500px;

        &:hover img{
          display: none;
        }

        &:hover .my-description{
          display: block;
        }

        img{
          width: 350px;
        }
      }

      .my-description{
        margin: 0 auto;
        width: 350px;
        list-style: none;
        height: 500px;
        background-color: black;
        display: none;
        padding: 40px 20px 0 20px;

        li {
          margin-bottom: 5px;
          span{
            font-size: 13px;
          }
        };
      }
    }
}
</style>
