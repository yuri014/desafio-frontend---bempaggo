<script setup></script>

<template>
  <div class="payment">
    <label for="cardNumber">Número do Cartão:</label>
    <input
      id="cardNumber"
      type="text"
      inputmode="numeric"
      autocomplete="cc-number"
    />
    <label for="cardName">Nome no Cartão:</label>
    <input
      id="cardNumber"
      type="text"
      inputmode="numeric"
      autocomplete="cc-name"
    />
    <div class="input-group">
      <div>
        <label for="cardExp">Vencimento:</label>
        <input
          id="cardExp"
          type="text"
          inputmode="numeric"
          autocomplete="cc-exp"
        />
      </div>
      <div>
        <label for="cardCVV">Código de Segurança:</label>
        <input
          id="cardCVV"
          type="text"
          inputmode="numeric"
          autocomplete="cc-csc"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment {
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.4rem;
    margin: 1rem 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  input {
    height: 3rem;
    padding: 1rem;
    background-color: $bg-high;
    border-radius: 4px;
    border: 1px solid $low-font-color;
  }

  .input-group {
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;

    input {
      margin-top: 1rem;
      width: 100%;
    }
  }
}
</style>
