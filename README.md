# Vue Compare Image


Simple Vue.js component to compare two images using slider.


## Demo

[DEMO](https://adrianbegic.github.io/vue-image-comparison/)

## Features

- Simple
- Size difference between two images handled correctly. 

## How to use

In the shell:


npm install --save vue-compare-image
```

In your component file:

```js
import VueCompareImage from 'vue-compare-image';

export default {
  name: 'app',
  components: { VueCompareImage },
};
```

```xml
<template>
  <VueCompareImage leftImage="image1.jpg" rightImage="image2.jpg" />;
</template>
```

