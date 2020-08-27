<template>
  <v-container class="pa-0">
    <v-img src="/karton.jpg">
      <video controls style="width:100%;  margin-top:200px">
        <source src="/1.mp4" type="video/mp4" />
      </video>
      <v-row justify="space-between">
        <v-btn  :to="'/level/'+this.$route.params.level+'/voice'" dark color="indigo" class="mr-1">
          <v-icon>mdi-chevron-right</v-icon>
          <span>بعدی</span>
        </v-btn>
        <v-btn :to="'/level/'+this.$route.params.level+'/question'" dark color="indigo" class="mr-1">
          <span>قبلی</span>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>