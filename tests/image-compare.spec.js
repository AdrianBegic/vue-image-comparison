import { mount } from '@vue/test-utils';
import ImageCompare from '../src/components/image-compare.vue'

describe('ImageCompare component', () => {
    describe('Default mounting properties', () => {
      it('should mount successfully', () => {
        const wrapper = mount(ImageCompare);
  
        expect(wrapper.vm._isMounted).toBeTruthy();
  
        expect(wrapper).toMatchSnapshot();
      });

      it('should unmount successfully', () => {
        const wrapper = mount(ImageCompare);
  
        const ImageComparelInstance = wrapper.vm;
        ImageComparelInstance.$destroy();
        expect(ImageComparelInstance._isDestroyed).toBeTruthy();
  
        expect(wrapper).toMatchSnapshot();
      });
    })})