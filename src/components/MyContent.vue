<template>
  <div class="my-content">

    <MySearchbar/>

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
      apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=ae88472fec19f34c8ca3084cba86594c&query=ritorno+al+futuro&language=it-IT",
      myArrayList: [],
      userText: ""
    }
  },

  created(){
    this.getList()
  },

  methods: {
    // axios call
    getList(){
      axios
      .get(this.apiUrl)
      .then((result) => {
        this.myArrayList = result.data.results;
        console.log(this.myArrayList);
      })
      .catch((error) => {
        console.log("Errore", error);
      })
    },

    // searchContent(userInput){
    //   this.userText = userInput;
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
