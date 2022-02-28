import ImageCompare from "./components/image-compare.vue";

const ImageCompareSimple = {
 install(Vue) {
  Vue.component("ImageCompare", ImageCompare);
 }
};


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ImageCompareSimple);
}

export default ImageCompareSimple;