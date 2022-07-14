<script>
import { ErrorMessage, Field } from 'vee-validate';

export default {
  props: ['formData'],
  components: {
    ErrorMessage,
    Field,
  },
};
</script>

<template>
  <div class="payment" v-if="formData.paymentMethod === 'creditCard'">
    <label for="cardNumber">Número do Cartão:</label>
    <Field
      id="cardNumber"
      name="cardNumber"
      type="text"
      inputmode="numeric"
      autocomplete="cc-number"
    />
    <ErrorMessage class="error" name="cardNumber" />
    <label for="nameOnCard">Nome no Cartão:</label>
    <Field
      id="nameOnCard"
      name="nameOnCard"
      type="text"
      inputmode="numeric"
      autocomplete="cc-name"
    />
    <ErrorMessage class="error" name="nameOnCard" />
    <div class="input-group">
      <div>
        <fieldset>
          <legend>Vencimento:</legend>
          <div>
            <Field
              id="expiryMonth"
              name="expiryMonth"
              type="text"
              inputmode="numeric"
              autocomplete="cc-exp-month"
              placeholder="Mês"
              title="Mês"
            />
            <ErrorMessage class="error" name="expiryMonth" />
          </div>
          <div>
            <Field
              id="expiryYear"
              name="expiryYear"
              type="text"
              inputmode="numeric"
              autocomplete="cc-exp-year"
              placeholder="Ano"
              title="Ano"
            />
            <ErrorMessage class="error" name="expiryYear" />
          </div>
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
        <ErrorMessage class="error" name="cvc" />
      </div>
    </div>
  </div>
  <div v-else-if="formData.paymentMethod === 'pix'">
    <p>
      Ao enviar seu pedido enviaremos o QR Code e o Pix Copia e Cola para o seu
      email!
    </p>
  </div>
  <div v-else>
    <p>Ao enviar seu pedido enviaremos o Boleto para o seu email!</p>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 1.8rem;
  text-align: center;
  padding-top: 3rem;
}

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
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;

        .error {
          width: 2rem;
        }
      }

      legend {
        font-size: 1.4rem;
      }

      input {
        width: 80%;
        margin-right: 6rem;
      }
    }
  }
}
</style>
