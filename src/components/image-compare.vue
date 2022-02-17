<template>
    <figure  style="--fraction: 50%">
      <img :src="BeforeImage" alt="Pic1" />
      <img :src="AfterImage" alt="Pic2" />
      <input
        title="Drag Me!"
        type="range"
        oninput="this.parentNode.style.setProperty('--fraction', this.value + '%')"
        min="0"
        max="100"
        step="0.1"
        value="50"
      />
    </figure>
</template>

<script>
export default {
  name: "ImageCompare",
  components: {},

props: {
   BeforeImage: null,
    AfterImage: null,
},
   
 


 
 
  
};
</script>

<style scoped>


figure {
  position: relative;
  --thumb-width: 32px;
}

figure img:first-of-type {
  width: 100%;
  clip-path: inset(0 calc(100% - var(--fraction, 50%)) 0 0);
}

figure img:last-of-type {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: inset(0 0 0 var(--fraction, 50%));
}

figure input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  appearance: none;
  width: calc(100% + var(--thumb-width));
  margin-left: calc(-1 * var(--thumb-width) / 2);
  margin-right: calc(-1 * var(--thumb-width) / 2);
  background: transparent;
  cursor: ew-resize;
}

figure input:focus {
  outline: none;
}

/* Chrome */
figure input::-webkit-slider-thumb {
  appearance: none;
  height: var(--thumb-width);
  width: var(--thumb-width);
  border-radius: 50%;
  background: #000;
  cursor: ew-resize;
}

figure input::-moz-range-thumb {
  height: var(--thumb-width);
  width: var(--thumb-width);
  border-radius: 50%;
  background: #000;
  border: solid 3px #fff;
  cursor: ew-resize;
}
</style>
