<template>
  <div class="my-searchbar">
    <input type="text" placeholder="Search"
    v-model="userInput"
    @keyup.enter="myInputValue()"
    >
    <button @click.prevent="myInputValue()">Search</button>
  </div>
</template>

<script>
export default {
    name: 'MySearchbar',

    data (){
        return {
            userInput: "",
        }  
    },

    methods: {
        myInputValue(){
            this.$emit('mySearch', this.userInput);
        },
        // resetSearch(){
        //     this.userInput= "";
        //     this.myInputValue();
        // }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.my-searchbar{
    width: 150px;
    height: 30px;
    display: flex;
}
</style>
