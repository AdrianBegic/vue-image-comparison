# Vue Compare Image | Works With Vue 3


Simple Vue.js component to compare two images using slider.



## Features

- Simple
- Size difference between two images handled correctly. 


![alt text](https://i.ibb.co/7tYNPjQ/vue-image-compare.png)


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
  }

}
```


```xml
<template>
  <ImageCompare :BeforeImage="BeforeImage" :AfterImage="AfterImage"/>
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


