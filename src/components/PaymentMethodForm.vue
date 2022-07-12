<script setup></script>

<template>
  <div>
    <label for="creditCard">
      <input type="radio" name="payment-method" id="creditCard" />
      Cartão de Crédito
    </label>
    <label for="bill">
      <input type="radio" name="payment-method" id="bill" />
      Boleto
    </label>
    <label for="pix">
      <input type="radio" name="payment-method" id="pix" />
      Pix
    </label>
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
