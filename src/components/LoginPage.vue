<template>
  <!-- Full-height container with custom gradient background -->
  <v-container class="login-background fill-height" fluid>
    <!-- Center content both vertically and horizontally -->
    <v-row align="center" justify="center">
      <!-- Responsive column with entrance animation -->
      <v-col cols="12" sm="8" md="4" class="login-animate">
        <!-- Card container with padding, elevation, and custom styles -->
        <v-card class="pa-4 login-card" elevation="12">
          <!-- Title centered with larger font size -->
          <v-card-title class="text-h5 font-weight-bold text-center">
          
            <!-- Logo centered at the top -->
              <div class="text-center mb-4">
                <v-img
                  src="@/assets/logo.png"
                  max-width="120"
                  class="mx-auto login-logo"
                  alt="App Logo"
                  contain
                />
              </div>
              Welcome Back 👋
               </v-card-title>
       

          <!-- Body of the card containing the form -->
          <v-card-text>
            <!-- Vuetify form with validation tracking -->
            <v-form ref="loginForm" v-model="formValid">
              <!-- Email input -->
              <v-text-field
                label="Email"
                v-model="email"
                :rules="[v => !!v || 'Email is required']"
                prepend-inner-icon="mdi-email"
                type="email"
                required
                hide-details="auto"
              />

              <!-- Password input -->
              <v-text-field
                label="Password"
                v-model="password"
                :rules="[v => !!v || 'Password is required']"
                prepend-inner-icon="mdi-lock"
                type="password"
                required
                hide-details="auto"
              />
            </v-form>
          </v-card-text>

          <!-- Action buttons centered -->
          <v-card-actions class="justify-center">
            <!-- Login button triggers form submission -->
            <v-btn
              color="deep-purple accent-4"
              class="login-button"
              :disabled="!formValid"
              @click="submitForm"
              block
              large
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
// Import the fake authentication logic
import auth from '../auth'

export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',            // Stores user's email input
      password: '',         // Stores user's password input
      formValid: false      // Tracks if the form is valid
    }
  },

  methods: {
    // Submit handler for the login form
    submitForm() {
      // Validate the form using Vuetify's form validation
      if (this.$refs.loginForm.validate()) {
        auth.login() // Fake login action
        console.log("User authenticated:", auth.isAuthenticated) // Debug log
        this.$router.push('/dashboard') // Navigate to dashboard on success
      }
    }
  }
}
</script>

<style scoped>
/* Gradient background for the login page */
.login-background {
  background: linear-gradient(135deg, #64b5f6, #8e24aa); /* Blue to purple gradient */
  background-size: cover;
  background-position: center;
}
.login-logo {
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}
.login-logo:hover {
  transform: scale(1.05);
}
/* Card style: rounded, shadow, and hover scaling */
.login-card {
  border-radius: 20px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.login-card:hover {
  transform: scale(1.02);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
}

/* Button style with animation on press */
.login-button {
  transition: transform 0.2s ease;
}
.login-button:active {
  transform: scale(0.97);
}

/* Fade-in animation for login form container */
.login-animate {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Keyframe for slide up & fade in */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
