<script setup>
import PackageIcon from '../assets/package.svg';
</script>

<template>
  <header>
    <div class="container">
      <div>
        <p>
          Formulário <br />
          para compras de
        </p>
        <strong>Pacote de adesivos</strong>
      </div>
      <div class="package-icon"><PackageIcon /></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 18rem;
  background-image: url('../assets/wave.svg');
  background-repeat: repeat-x;
  background-size: cover;
  background-position: center center;
  position: relative;

  @media (min-width: 720px) {
    background-color: $brand-color;
    height: 14rem;
    margin-bottom: 4rem;
  }

  .container {
    padding: 2rem;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: 55% 45%;

    @media (min-width: 720px) {
      padding: 2rem 0;
      justify-content: space-between;
    }

    p {
      font-size: 2rem;
      font-weight: 300;
      color: $bg-high;
    }

    strong {
      font-size: 2rem;
      color: $pure-white;
    }

    .package-icon {
      width: 100%;
      svg {
        position: absolute;
        transform: scale(0.6) rotateX(35deg);
        fill: #191647;
        margin-top: -8rem;
        margin-left: -4rem;

        @media (min-width: 720px) {
          width: max-content;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
