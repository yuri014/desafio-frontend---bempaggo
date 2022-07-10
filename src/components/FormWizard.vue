<script>
import Form from './Form.vue';
export default {
  data: () => ({
    steps: ['Pedido', 'Pagamento'],
    currentStep: 0,
  }),
  computed: {
    stepperProgress() {
      const total = 100;
      return `${(total / (this.steps.length - 1)) * this.currentStep}%`;
    },
    currentStepValue() {
      return this.steps.at(this.currentStep);
    },
  },
  components: { Form },
};
</script>

<template>
  <div class="wrapper-stepper container">
    <div class="stepper">
      <div class="stepper-progress">
        <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
      </div>
      <div
        class="stepper-item"
        :class="{ current: currentStepValue == item, success: currentStep > steps.indexOf(item) }"
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
        <span class="stepper-item-title"> {{ item }} </span>
      </div>
    </div>

    <div class="stepper-content" v-for="item in steps" :key="item">
      <div class="stepper-pane" v-if="currentStepValue == item">
        <Form />
      </div>
    </div>

    <div class="controls">
      <button class="btn" @click="currentStep--" :disabled="currentStep == 0">Anterior</button>
      <button class="btn btn--green-1" @click="currentStep++" :disabled="currentStep == 1">
        Seguinte
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-stepper {
  background-color: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 32px;
  box-shadow: 0 8px 12px rgba($color: #000000, $alpha: 0.09);
  width: 90vw;
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  position: relative;
  z-index: 0;
  margin-bottom: 24px;

  &-progress {
    position: absolute;
    background-color: #c5c5c5;
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
      background-color: #2f3676;
      transition: all 500ms ease;
    }
  }
}

.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c5c5c5;
  transition: all 500ms ease;

  &-counter {
    height: 4rem;
    width: 4rem;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 2px solid #c5c5c5;
    position: relative;

    .icon-success {
      position: absolute;
      opacity: 0;
      transform: scale(0);
      width: 1.2rem;
      transition: all 500ms ease;
    }

    .number {
      font-size: 22px;
      transition: all 500ms ease;
    }
  }

  &-title {
    position: absolute;
    font-size: 14px;
    bottom: -24px;
  }
}

.stepper-item.success {
  .stepper-item-counter {
    border-color: #2f3676;
    background-color: #485091;
    color: #fff;
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
    color: #2f3676;
  }
}

.stepper-item.current {
  .stepper-item-counter {
    border-color: #2f3676;
    background-color: #2f3676;
    color: #fff;
    font-weight: 600;
  }

  .stepper-item-title {
    color: #818181;
  }
}

.stepper-content {
  width: 100%;
  padding: 0 2rem;
}

.stepper-pane {
  color: #333;
  min-height: 20rem;
  margin: 4rem 0;
}

.controls {
  display: flex;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  border: 1px solid;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  line-height: 1.5;
  transition: all 150ms;
  border-radius: 4px;
  width: fit-content;
  font-size: 0.75rem;
  color: #333;
  background-color: #f0f0f0;
  border-color: #f0f0f0;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &--green-1 {
    background-color: #2f3676;
    border-color: #2f3676;
    color: #fff;
    margin-left: auto;
  }
}
</style>
