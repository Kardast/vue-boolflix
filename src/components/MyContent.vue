<template>
  <div class="my-content">
    <header>

      <MySearchbar @mySearch="searchContent"/>
    </header>

    <main>

      <div class="wrapper">

        <MyTvCard
          v-for="(item, index) in myTvList"
          :key="index"
          :contentObject="item"
        />
    
        <MyMoviesCard
          v-for="(item, j) in myMoviesArray"
          :key="j + myTvList.length"
          :contentObject="item"
        />
      </div>
    </main>

  </div>
</template>

<script>
import axios from "axios";
import MySearchbar from './MySearchbar.vue';
import MyMoviesCard from './MyMoviesCard.vue';
import MyTvCard from './MyTvCard.vue';

export default {
  name: 'MyContent',
  components: {
      MySearchbar,
      MyMoviesCard,
      MyTvCard
  },

// My API, array and what the user searches
  data(){
    return {
      apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=ae88472fec19f34c8ca3084cba86594c&language=it-IT",
      apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=ae88472fec19f34c8ca3084cba86594c&language=it_IT",
      myMoviesArray: [],
      myTvList: [],
      userText: "",
    }
  },

  created(){
    this.getList()
  },

  methods: {
    // axios call
    getList(){
      if (this.userText !== "") {
        
        let currentUrl = this.apiUrlMovie + "&query=" + this.userText;

        console.log(1, currentUrl);
        axios
        .get(currentUrl)
        .then((result) => {
          this.myMoviesArray = result.data.results;
          console.log(12, this.myMoviesArray);
        })
        .catch((error) => {
          console.log("Errore", error);
        });

        let currentUrlTv = this.apiUrlTv + "&query=" + this.userText;

        axios
        .get(currentUrlTv)
        .then((result) => {
          this.myTvList = result.data.results;
          console.log(13, this.myTvList);
        })
        .catch((error) => {
          console.log("Errore", error);
        });
      }
    },

    searchContent(userInput){
      this.userText = userInput;
      console.log(this.userText);
      this.getList()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-content{
  background-color: rgb(90, 38, 38);
  width: 100%;
  height: 100%;
  overflow: scroll;

  .wrapper{
    width: 80%;
    background-color: rgb(148, 108, 108);
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

}

</style>
