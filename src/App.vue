<script setup>
import MainHeader from './components/MainHeader.vue';
import FormWizard from './components/FormWizard.vue';
</script>

<template>
  <MainHeader />
  <FormWizard />
</template>

<style lang="scss">
:root {
  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $high-font-color;
}

body {
  background-color: $bg-low;
}

.container {
  max-width: 60rem;
  margin: 0 auto;
}

.error {
  color: $error;
  font-size: 1.4rem;
  width: max-content;
}
</style>
