<template>
  <v-container class="fill-height cyan">
    <v-row justify="center">
      <v-col cols="12">
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7" />
      </v-col>

      <v-col cols="12">
        <v-form v-model="isValid">
          <v-text-field
            v-model="form.phone"
            :rules="[() => !!form.phone || 'وارد کردن این مورد الزامی است']"
            :error-messages="errorMessages"
            label="شماره تلفن"
            solo
            rounded
            required
            prepend-inner-icon="mdi-cellphone-iphone"
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
            <v-btn @click="login" :loading="loading" prepend-inner-icon="mdi-login">ورود</v-btn>
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
  created(){
    this.$router.push('/level');
  },

  data() {
    return {
      form: {
        phone: "",
        password: "",
      },
      errorMessages: "",
      isValid: false,
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;

      this.$auth.loginWith("local", { data: this.form })
      .then((response) => {
        this.$router.push("/level");
      })
      .catch((error)=>{
        
      })
      .finally(()=>{
        this.loading = false;
      });


    },
  },
};
</script>
