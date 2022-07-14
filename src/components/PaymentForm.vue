<script>
import { Field } from 'vee-validate';

export default {
  components: {
    Field,
  },
};
</script>

<template>
  <div class="payment">
    <label for="cardNumber">Número do Cartão:</label>
    <Field
      id="cardNumber"
      name="cardNumber"
      type="text"
      inputmode="numeric"
      autocomplete="cc-number"
    />
    <label for="nameOnCard">Nome no Cartão:</label>
    <Field
      id="nameOnCard"
      name="nameOnCard"
      type="text"
      inputmode="numeric"
      autocomplete="cc-name"
    />
    <div class="input-group">
      <div>
        <fieldset>
          <legend>Vencimento:</legend>
          <Field
            id="expiryMonth"
            name="expiryMonth"
            type="text"
            inputmode="numeric"
            autocomplete="cc-exp-month"
            placeholder="Mês"
            title="Mês"
          />
          <Field
            id="expiryYear"
            name="expiryYear"
            type="text"
            inputmode="numeric"
            autocomplete="cc-exp-year"
            placeholder="Ano"
            title="Ano"
          />
        </fieldset>
      </div>
      <div>
        <label for="cvc">Código de Segurança:</label>
        <Field
          id="cvc"
          name="cvc"
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

    fieldset {
      border: none;

      legend {
        font-size: 1.4rem;
      }

      input {
        width: 40%;
        margin-right: 1rem;
      }
    }
  }
}
</style>
