<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <h1 class="text-right">Hi there!!!</h1>
      </v-col>
      </v-row>
      <v-row class= "d-flex justify-center">
        <v-avatar
        size="150">
        <v-img height="100%"
        src="../assets/me.jpeg"
        cover></v-img>
      </v-avatar>
      <v-col cols="10">
        <h2 class="text-center">Allways glad to see you, on my site!</h2>
        <h2 class="text-md-right text-lg-left text-sm-center">Let's hang out!</h2>
      </v-col>
  </v-row>
</v-container>
  </template>
<style scoped>
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 1.5rem;
}

@media (min-width: 600px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    /* font-size: 1.5rem; */
  }
}

@media (min-width: 960px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
}
@media (min-width: 1264px) {
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3.5rem;
  }
}
</style>