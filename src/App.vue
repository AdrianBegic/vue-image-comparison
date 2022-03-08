<template>
  <h1>DEMO</h1>
  <ImageCompare
    :BeforeImage="BeforeImage"
    :AfterImage="AfterImage"
    :SlideConfig="SlideConfig"
  />
</template>

<script>
import ImageCompare from "./components/image-compare.vue";

export default {
  name: "App",
  components: {
    ImageCompare,
  },

  data() {
    return {
      BeforeImage: require("./assets/pic1.jpg"),
      AfterImage: require("./assets/pic2.jpg"),
    };
  },

  setup() {
    const SlideConfig = {
      slideBg: "#000",
      slideBorder: "solid 3px #fff",
    };

    return {
      SlideConfig,
    };
  },
};
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

img, svg, figure {
    min-height: 700px;
    max-height: 700px;
    min-width: 1000px;
    max-width: 1000px;
  }
</style>
