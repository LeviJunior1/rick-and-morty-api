<template>
  <v-app>
    <v-main class="background">
      <MainCharacter
      />
    </v-main>
  </v-app>
</template>

<script>
import MainCharacter from './components/MainCharacter';

export default {
  name: 'App',

  components: {
    MainCharacter,
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  .background {
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  }
</style>
