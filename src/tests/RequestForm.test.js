import { mount } from '@vue/test-utils';
import { beforeAll, describe, expect, it } from 'vitest';
import RequestForm from '../components/RequestForm.vue';

describe('About Request Form', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(RequestForm, {
      props: {
        formData: {
          react: 3,
          vue: 2,
          angular: 1,
        },
      },
    });
  });

  it('should have stickers from formData', () => {
    expect(wrapper.find('[name="react"]').element.value).toBe('3');
    expect(wrapper.find('[name="vue"]').element.value).toBe('2');
    expect(wrapper.find('[name="angular"]').element.value).toBe('1');
  });

  it('should increment sticker', async () => {
    await wrapper.find('#reactIncrement').trigger('click');
    await wrapper.find('#vueIncrement').trigger('click');
    await wrapper.find('#angularIncrement').trigger('click');

    expect(wrapper.find('[name="react"]').element.value).toBe('4');
    expect(wrapper.find('[name="vue"]').element.value).toBe('3');
    expect(wrapper.find('[name="angular"]').element.value).toBe('2');
  });

  it('should decrement sticker', async () => {
    await wrapper.find('#reactDecrement').trigger('click');
    await wrapper.find('#vueDecrement').trigger('click');
    await wrapper.find('#angularDecrement').trigger('click');

    expect(wrapper.find('[name="react"]').element.value).toBe('3');
    expect(wrapper.find('[name="vue"]').element.value).toBe('2');
    expect(wrapper.find('[name="angular"]').element.value).toBe('1');
  });
});
