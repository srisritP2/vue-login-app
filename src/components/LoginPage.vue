<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-4" elevation="10">
          <v-card-title class="text-h6 justify-center">Login</v-card-title>

          <v-card-text>
            <v-form ref="loginForm" v-model="formValid">
              <v-text-field
                label="Email"
                v-model="email"
                :rules="[v => !!v || 'Email is required']"
                prepend-inner-icon="mdi-email"
                required
              />
              <v-text-field
                label="Password"
                v-model="password"
                :rules="[v => !!v || 'Password is required']"
                type="password"
                prepend-inner-icon="mdi-lock"
                required
              />
            </v-form>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              :disabled="!formValid"
              @click="submitForm"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      formValid: false,
    }
  },
  methods: {
    submitForm() {
      // Check if the form is valid
      if (this.$refs.loginForm.validate()) {
        // If valid, navigate to the dashboard page
        this.$router.push('/dashboard');
      }
    }
  }
}
</script>
