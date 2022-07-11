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

  .container {
    padding: 2rem;
    padding-bottom: 0;
    display: flex;
    p {
      font-size: 2rem;
      font-weight: 300;
      color: $bg-high;
    }

    strong {
      font-size: 2rem;
      color: $pure-white;
    }

    svg {
      position: absolute;
      transform: scale(0.6) rotateX(35deg);
      fill: #191647;
      margin-top: -8rem;
      margin-left: -5rem;
    }
  }
}
</style>
