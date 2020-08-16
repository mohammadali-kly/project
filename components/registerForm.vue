<template>
  <v-form v-model="isValid">
    <v-text-field
      ref="name"
      v-model="name"
      :rules="[() => !!name || 'وارد کردن این مورد الزامی است']"
      :error-messages="errorMessages"
      label="نام خانوادگی"
      solo
      rounded
      required
      prepend-inner-icon="mdi-account"
    ></v-text-field>
    <v-text-field
      ref="password"
      v-model="password"
      :rules="[() => !!password || 'وارد کردن این مورد الزامی است']"
      :error-messages="errorMessages"
      label=" شماره تلفن"
      solo
      rounded
      required
      prepend-inner-icon="mdi-cellphone-android"
    ></v-text-field>
    <v-row justify="center">
      <v-btn @click="$emit('change-mode')">تایید</v-btn>
    </v-row>
    <v-row justify="center" class="mt-2">
      <nuxt-link class="white--text" to="/">وارد شوید</nuxt-link>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      errorMessages: "",
      isValid: false,
    };
  },
};
</script>

<style>
</style>