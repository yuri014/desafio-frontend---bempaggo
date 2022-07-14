<script>
import { ErrorMessage, Field } from 'vee-validate';

export default {
  components: {
    Field,
    ErrorMessage,
  },
};
</script>

<template>
  <div>
    <label for="creditCard">
      <Field
        type="radio"
        name="paymentMethod"
        id="creditCard"
        value="creditCard"
        checked
      />
      Cartão de Crédito
    </label>
    <label for="bill">
      <Field type="radio" name="paymentMethod" id="bill" value="bill" />
      Boleto
    </label>
    <label for="pix">
      <Field type="radio" name="paymentMethod" id="pix" value="pix" />
      Pix
    </label>
    <ErrorMessage class="error" name="paymentMethod" />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label {
    display: flex;
    place-items: center;
    gap: 1rem;
    background-color: $bg-low;
    border-radius: 4px;
    padding: 2rem;
    font-size: 1.6rem;
  }
}
</style>
