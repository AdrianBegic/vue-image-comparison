# Vue Compare Image | Works With Vue 3


Simple Vue.js component to compare two images using slider.



## Features

- Simple
- Size difference between two images handled correctly. 


<<<<<<< HEAD
![alt text](../vue-image-comparison/src/assets/compare.gif)
=======
![alt text](https://i.ibb.co/7tYNPjQ/vue-image-compare.png)

>>>>>>> 59da005bb30204030539272fc50335f29a2287fc

## How to use


In the shell:


npm install --vue-image-comparison

In your component file:
```vue



import ImageCompare from 'vue-image-comparison'

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

}
```


```xml
<template>
  <ImageCompare :BeforeImage="BeforeImage" :AfterImage="AfterImage" :SlideConfig="SlideConfig"/>
</template>
```
Control the sizing of the images

```xml
img, svg, figure {
    min-height: 800px;
    max-height: 800px;
    min-width: 800px;
    max-width: 800px;
  }
```


Control the sizing of the images


```xml
img, svg, figure {
    min-height: 800px;
    max-height: 800px;
    min-width: 800px;
    max-width: 800px;
  }
```

