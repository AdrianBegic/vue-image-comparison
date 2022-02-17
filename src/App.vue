<template>
<h1> DEMO </h1>
 <ImageCompare :BeforeImage="BeforeImage" :AfterImage="AfterImage"/>
</template>

<script>
import ImageCompare from './components/image-compare.vue'

export default {
  name: 'App',
  components: {
  ImageCompare
  },

  data() {
    return {
      BeforeImage: require('./assets/pic1.jpg'),
      AfterImage: require('./assets/pic2.jpg'),
    }
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
