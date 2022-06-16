<template>
  <section class="bar">

    <div class="logo">

      <h1>BOOLFLIX</h1>
    </div>

    <div class="my-searchbar">
      <input type="text" placeholder="Search"
      v-model="userInput"
      @keyup.enter="myInputValue()"
      >
      <button @click.prevent="myInputValue()">Search</button>
    </div>
  </section>
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bar{
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  align-items: center;

  .logo{
    width: 50%;
    height: 30px;
    color: red;
    padding-left: 20px;
  }
  .my-searchbar{
    width: 50%;
    height: 30px;
    display: flex;
    display: flex;
    justify-content: end;
    padding-right: 20px;
  }
}
</style>
