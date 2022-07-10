<script>
export default {
  data: () => ({
    stickers: {
      react: {
        count: 0,
      },
      vue: {
        count: 0,
      },
      angular: {
        count: 0,
      },
    },
  }),
  methods: {
    capitalize: word => word.charAt(0).toUpperCase() + word.slice(1),
    incrementCount(sticker) {
      this.stickers[sticker].count += 1;
    },
    decrementCount(sticker) {
      if (this.stickers[sticker].count !== 0) {
        this.stickers[sticker].count -= 1;
      }
    },
  },
};
</script>

<template>
  <form class="container">
    <p>Quais adesivos:</p>
    <div class="stickers__container">
      <div class="sticker" v-for="sticker in Object.keys(stickers)" :key="sticker">
        <label :for="sticker">{{ capitalize(sticker) }}</label>
        <div class="sticker-buttons">
          <button type="button" @click="decrementCount(sticker)">-</button>
          <input
            type="number"
            :name="sticker"
            :id="sticker"
            :value="stickers[sticker].count"
          />
          <button type="button" @click="incrementCount(sticker)">+</button>
        </div>
      </div>
    </div>
    <textarea
      name="observations"
      id="observations"
      rows="5"
      placeholder="Alguma dúvida? Recado?"
    ></textarea>
  </form>
</template>

<style lang="scss">
form {
  p {
    font-size: 1.6rem;
    font-weight: bold;
  }

  textarea {
    padding: 1rem;
    width: 100%;
    background-color: $bg-low;
    border: 1px solid $brand-color;
    border-radius: 4px;
  }

  .stickers__container {
    margin: 2rem 0;

    .sticker {
      margin: 1rem 0;
      width: 20rem;
      display: grid;
      grid-template-columns: 30% 30%;
      align-items: center;
      gap: 1rem;

      label {
        font-size: 1.4rem;
      }

      .sticker-buttons {
        display: flex;
        border-radius: 4px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        button {
          border: none;
          background-color: transparent;
          color: $brand-color;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.4rem;
          font-weight: bold;
          width: 2.5rem;
          height: 2.5rem;
        }

        input {
          border: none;
          width: 2.5rem;
          height: 2.5rem;
          text-align: center;
          background-color: $bg-high;
        }
      }
    }
  }
}
</style>
