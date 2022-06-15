<template>
  <div class="my-content">

    <MySearchbar @mySearch="searchContent"/>

    <MyContentCard
      v-for="(item, index) in myArrayList"
      :key="index"
      :contentObject="item"
    />
  </div>
</template>

<script>
import axios from "axios";
import MySearchbar from './MySearchbar.vue';
import MyContentCard from './MyContentCard.vue';

export default {
  name: 'MyContent',
  components: {
      MySearchbar,
      MyContentCard
  },

// My API, array and what the user searches
  data(){
    return {
      apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=ae88472fec19f34c8ca3084cba86594c&language=it-IT",
      myArrayList: [],
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
        
        let currentUrl = this.apiUrl + "&query=" + this.userText;
        console.log(1, currentUrl);
        axios
        .get(currentUrl)
        .then((result) => {
          this.myArrayList = result.data.results;
          console.log(1, this.myArrayList);
        })
        .catch((error) => {
          console.log("Errore", error);
        })
      }
    },

    searchContent(userInput){
      this.userText = userInput;
      console.log(this.userText);
      this.getList()
    }
  },

  computed: {
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
}

</style>
