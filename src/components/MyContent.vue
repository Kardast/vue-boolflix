<template>
  <div class="my-content">
    <MySearchbar @mySearch="searchContent"/>

    <!-- <div v-for="(item, k) in myTvList" :key="k">{{item.vote_average}}</div> -->
    <!-- <div>{{globalVote}}</div> -->

    <!-- <p>{{capitalizedName}}</p> -->

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
      // namea: ""
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

  computed: {
    // capitalizedName(){
    //   this.myMoviesArray.forEach(element => {
    //     let myoi = element
    //     return console.log(myoi);
    //     });
    // }
    // globalVote(){
    //   for (let i = 0; i < this.myTvList.length; i++) {
    //     return this.myTvList[i].vote_average
    //   } 
    // }
    // getFlag(){
    //   for (let i = 0; i < this.myArrayList.length; i++) {
    //     let myOrginalLang = this.myArrayList[i].original_language
    //     if (myOrginalLang === "it") {
    //       return this.flag = "prova"
    //       // return console.log(myOrginalLang);
    //     }
        
    //   }
    // }
    // filteredContentCards(){
    //   if (this.userText === "") {
        
    //     return this.myArrayList;
    //   } else {

    //     return this.myArrayList.filter(item => {
    //       return item.title.toLowerCase().includes(this.userText.toLowerCase());
    //     });
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-content{
  background-color: rgb(90, 38, 38);
  width: 90%;
  height: 90%;
  overflow: scroll;

}

</style>
