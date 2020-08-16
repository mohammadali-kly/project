<template>
  <v-container class="fill-height cyan">
    <v-row justify="center">
      <v-col cols="12"></v-col>

      <v-col cols="12">
        <register-form v-if="mode" @change-mode="mode=false"></register-form>
        <verification-form v-else></verification-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        mode : true
    };
  },
};
</script>

<style>
</style>