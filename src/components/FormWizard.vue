<script>
import { defineAsyncComponent, ref } from 'vue';
import { Form } from 'vee-validate';
import yupSchema from './utils/schema';

export default {
  data: () => ({
    steps: ['Pedido', 'Forma de Pagamento', 'Pagamento'],
    currentStep: 0,
    formData: yupSchema,
  }),
  computed: {
    stepperProgress() {
      const total = 100;
      return `${(total / (this.steps.length - 1)) * this.currentStep}%`;
    },
    currentStepValue() {
      return this.steps.at(this.currentStep);
    },
    currentSchema() {
      return this.formData[this.currentStep];
    },
  },
  components: {
    RequestForm: defineAsyncComponent(() => import('./RequestForm.vue')),
    PaymentMethodForm: defineAsyncComponent(() =>
      import('./PaymentMethodForm.vue'),
    ),
    PaymentForm: defineAsyncComponent(() => import('./PaymentForm.vue')),
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
  },
  methods: {
    onSubmit(values) {
      if (this.currentStep === this.steps.length - 1) {
        return;
      }

      Object.assign(this.formData, values);
      this.currentStep += 1;
    },
  },
  setup() {
    const forms = ref(['RequestForm', 'PaymentMethodForm', 'PaymentForm']);

    return {
      forms,
    };
  },
};
</script>

<template>
  <div class="wrapper-stepper container">
    <div class="stepper">
      <div class="stepper-progress">
        <div
          class="stepper-progress-bar"
          :style="'width:' + stepperProgress"
        ></div>
      </div>
      <div
        class="stepper-item"
        :class="{
          current: currentStepValue == item,
          success: currentStep > steps.indexOf(item),
        }"
        v-for="item in steps"
        :key="item"
      >
        <div class="stepper-item-counter">
          <img
            class="icon-success"
            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
            alt=""
          />
          <span class="number">
            {{ steps.indexOf(item) + 1 }}
          </span>
        </div>
        <p class="stepper-item-title">{{ item }}</p>
      </div>
    </div>

    <Form
      @submit="onSubmit"
      :validation-schema="currentSchema"
    >
      <div class="stepper-content" v-for="(form, index) in forms" :key="form">
        <div class="stepper-pane" v-if="this.currentStep == index">
          <component :is="form"></component>
        </div>
      </div>

      <div class="controls">
        <button
          class="btn"
          type="button"
          @click="currentStep--"
          :disabled="currentStep == 0"
        >
          Anterior
        </button>
        <button class="btn btn-success" type="submit">
          {{ currentStep === steps.length - 1 ? 'Enviar' : 'Seguinte' }}
        </button>
      </div>
    </Form>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-stepper {
  min-height: 35rem;
  background-color: $bg-high;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 32px;
  box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
  width: 90vw;
  max-width: 60rem;
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  position: relative;
  z-index: 0;
  margin-bottom: 24px;

  &-progress {
    position: absolute;
    background-color: $disabled-color;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;

    &-bar {
      position: absolute;
      left: 0;
      height: 100%;
      width: 0%;
      background-color: $brand-color;
      transition: $default-transition;
    }
  }
}

form {
  width: 100%;
  padding: 0 2rem;
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $disabled-color;
  transition: $default-transition;

  &-counter {
    height: 4rem;
    width: 4rem;
    display: grid;
    place-items: center;
    background-color: $bg-high;
    border-radius: 100%;
    border: 2px solid $disabled-color;
    position: relative;

    .icon-success {
      position: absolute;
      opacity: 0;
      transform: scale(0);
      width: 1.2rem;
      transition: $default-transition;
    }

    .number {
      font-size: 2rem;
      transition: $default-transition;
    }
  }

  &-title {
    position: absolute;
    font-size: 1.6rem;
    margin-top: 5rem;
    text-align: center;
    width: 10rem;
  }
}

.stepper-item.success {
  .stepper-item-counter {
    border-color: $brand-color;
    background-color: $brand-color-low;
    color: $pure-white;
    font-weight: 600;

    .icon-success {
      opacity: 1;
      transform: scale(1);
    }

    .number {
      opacity: 0;
      transform: scale(0);
    }
  }

  .stepper-item-title {
    color: $brand-color;
  }
}

.stepper-item.current {
  .stepper-item-counter {
    border-color: $brand-color;
    background-color: $brand-color;
    color: $pure-white;
    font-weight: 600;
  }

  .stepper-item-title {
    color: $low-font-color;
  }
}

.stepper-pane {
  color: $low-font-color;
  min-height: 20rem;
  margin: 4rem 0 2rem 0;
}

.controls {
  display: flex;
  gap: 2rem;
  width: fit-content;
  margin: 0 auto;
}

.btn {
  padding: 0.8rem 1.6rem;
  border: 1px solid;
  text-align: center;
  cursor: pointer;
  transition: all 150ms;
  border-radius: 4px;
  width: fit-content;
  font-size: 1.6rem;
  color: $low-font-color;
  background-color: $bg-low;
  border-color: $bg-low;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:active {
      pointer-events: none;
    }
  }

  &-success {
    background-color: $brand-color;
    border-color: $brand-color;
    color: $pure-white;
    margin-left: auto;
  }
}
</style>
