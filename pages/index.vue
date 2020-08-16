<template>
  <v-container class="fill-height cyan">
    <v-row justify="center">
      <v-col cols="12">
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" />
      </v-col>

      <v-col cols="12">
        <v-form v-model="isValid">
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'وارد کردن این مورد الزامی است']"
            :error-messages="errorMessages"
            label="شماره تلفن"
            solo
            rounded
            required
            prepend-inner-icon="mdi-cellphone-iphone"
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="password"
            :rules="[() => !!password || 'وارد کردن این مورد الزامی است']"
            :error-messages="errorMessages"
            label="رمز عبور"
            solo
            rounded
            required
            prepend-inner-icon="mdi-eye-off"
          ></v-text-field>
          <v-row justify="center">
            <v-btn @click="login">ورود</v-btn>
          </v-row>
          <v-row justify="center" class="mt-2">
            <nuxt-link to="/register" class="white--text">ثبت نام کنید</nuxt-link>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
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
  methods: {
    login() {
      this.$axios.$get("https://api.github.com/events").then((response) => {
        console.log(response);
      });
    },
  },
};
</script>
