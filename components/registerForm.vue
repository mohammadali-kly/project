<template>
  <v-form v-model="isValid">
    <v-text-field
      v-model="form.name"
      :rules="[() => !!form.name || 'وارد کردن این مورد الزامی است']"
      :error-messages="errorMessages"
      label="نام خانوادگی"
      solo
      rounded
      required
      prepend-inner-icon="mdi-account"
    ></v-text-field>
    <v-text-field
      v-model="form.phone"
      :rules="[() => !!form.phone || 'وارد کردن این مورد الزامی است']"
      :error-messages="errorMessages"
      label=" شماره تلفن"
      solo
      rounded
      required
      prepend-inner-icon="mdi-cellphone-android"
    ></v-text-field>
    <v-text-field
      v-model="form.password"
      :rules="[() => !!form.password || 'وارد کردن این مورد الزامی است']"
      :error-messages="errorMessages"
      label="رمز عبور"
      solo
      rounded
      required
      prepend-inner-icon="mdi-eye-off"
    ></v-text-field>
    <v-row justify="center">
      <v-btn @click="$emit('change-mode')">ثبت نام</v-btn>
    </v-row>
    <v-row justify="center" class="mt-4">
      <v-btn dark depressed text to="/">
        <v-icon class="ml-2">mdi-home</v-icon>
        <span class="white--text">وارد شوید</span>
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        password: "",
      },
      errorMessages: "",
      isValid: false,
    };
  },
  methods: {},
};
</script>

<style>
</style>