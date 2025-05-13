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
import auth from '../auth'  // Import the fake auth module

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      formValid: false
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.loginForm.validate()) {
        // Fake authentication
        auth.login()  // This would log the user in
        console.log("User authenticated:", auth.isAuthenticated)  // Log to check
        this.$router.push('/dashboard')  // Redirect to dashboard
      }
    }
  }
}
</script>
