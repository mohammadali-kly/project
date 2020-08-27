<template>
  <v-container class="pa-0">
    <v-img src="/voice.jpg">
      <v-row justify="center" style="margin-top:200px">
        <v-col class="text-center" cols="12">دیکته</v-col>
        <v-col class="text-center" cols="12">
          <audio controls>
            <source src="/voice.mp3" type="audio/mpeg" />
          </audio>
        </v-col>
      </v-row>
      <div class="d-flex justify-end mt-6">
        <v-btn :to="'/level/'+this.$route.params.level+'/karton'" dark color="indigo">
          <span>قبلی</span>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
    </v-img>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>