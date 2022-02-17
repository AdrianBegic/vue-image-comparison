# Vue Compare Image


Simple Vue.js component to compare two images using slider.



## Features

- Simple
- Size difference between two images handled correctly. 

## How to use

In the shell:


npm install --vue-image-comparison
```

In your component file:

```js
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
```


```xml
<template>
  <ImageCompare :BeforeImage="BeforeImage" :AfterImage="AfterImage"/>
</template>
```

