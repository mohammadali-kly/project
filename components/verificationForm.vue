<template>
  <v-form>
    <v-text-field
      ref="name"
      v-model="name"
      :rules="[() => !!name || 'وارد کردن این مورد الزامی است']"
      :error-messages="errorMessages"
      label="کد تایید را وارد کنید"
      solo
      rounded
      required
      prepend-inner-icon="mdi-account"
    ></v-text-field>
    <v-row justify="center">
      <v-btn >تایید</v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {};
</script>

<style>
</style>