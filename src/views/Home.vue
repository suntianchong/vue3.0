<template>

  <div class="container">
   <!--头部导航栏-->
  <nav-bar></nav-bar>
   <!--头部区域-->
   <head-bar></head-bar>
    <!--主要内容-->
    <main-content></main-content>
  </div>
</template>

<script>
import HeadBar from './HeadBar'
import NavBar from './NarBar'
import MainContent from './MainContent'

export default {
  components:{
    HeadBar,
    NavBar,
    MainContent
  }
};
</script>>
