<template>
  <div id="app">
    <PracticeOne/>
    <PracticeTwo/>
    <StockList/>
    <GallaryLoop/>
    <AddImg/>
    <VueModel/>
    <FilterVue/>
  </div>
</template>

<script>
import PracticeOne from './components/PracticeOne.vue'
import PracticeTwo from "./components/PracticeTwo.vue"
import StockList from './components/StockList.vue'
import GallaryLoop from './components/GallaryLoop.vue'
import AddImg from './components/AddImg.vue'
import VueModel from './components/VueModel.vue'
import FilterVue from './components/FilterVue.vue'

export default {
  name: 'App',
  components:{
    PracticeOne,
    PracticeTwo,
    StockList,
    GallaryLoop,
    AddImg,
    VueModel,
    FilterVue
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
