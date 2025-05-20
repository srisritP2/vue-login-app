<template>
  <!-- Container fills full height and uses custom background styles -->
  <v-container class="login-background fill-height" fluid>
    <!-- Center content vertically and horizontally -->
    <v-row align="center" justify="center">
      <!-- Column for responsive sizing with fade-in animation -->
      <v-col cols="12" sm="8" md="4" class="login-animate">
        <!-- Card with padding and custom styles -->
        <v-card class="pa-4 login-card" elevation="12">
          <!-- Title text centered -->
          <v-card-title class="text-h6 text-center">App SignIn</v-card-title>

          <!-- Card content area -->
          <v-card-text>
            <!-- Form with validation binding -->
            <v-form ref="loginForm" v-model="formValid">
              <!-- Email input field -->
                  <!-- Label shown above input -->
                  <!-- Two-way binding to data.email -->
                  <!-- Validation rule: must be filled -->
                  <!-- Icon inside input -->
                  <!-- HTML5 required attribute -->
              <v-text-field
                label="Email"                  
                v-model="email"                
                :rules="[v => !!v || 'Email is required']"  
                prepend-inner-icon="mdi-email"
                required                      
              />
              <!-- Password input field -->
                  <!-- Label for password -->
                  <!-- Two-way binding to data.password -->
                  <!-- Validation rule -->
                  <!-- Mask input as password -->
                   <!-- Lock icon -->
                  <!-- Required input -->
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

          <!-- Card actions with button centered -->
          <v-card-actions class="justify-center">
            <!-- Login button -->
             <!-- Primary color from Vuetify theme -->
                  <!-- Custom CSS for animation -->
                  <!-- Disabled when form is invalid -->
                  <!-- On click, call submitForm method -->
            <v-btn
              color="primary"               
              class="login-button"          
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
import auth from '../auth'  // Import your fake authentication module

export default {
  name: 'LoginPage',       // Component name

  data() {
    return {
      email: '',            // User email input model
      password: '',         // User password input model
      formValid: false,     // Validation status of the form (true or false)
    }
  },

  methods: {
    submitForm() {
      // Validate the form by calling the validate() method on the v-form ref
      if (this.$refs.loginForm.validate()) {
        // Call fake login method (simulate user login)
        auth.login()
        // Log current authentication status in console (for debugging)
        console.log("User authenticated:", auth.isAuthenticated)
        // Redirect user to the dashboard route after successful login
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>

<style scoped>
/* Background gradient for entire container */
.login-background {
  background: linear-gradient(135deg, #66ea80, #764ba2);
  background-size: cover;          /* Make sure background covers entire area */
  background-position: center;     /* Center the background */
}

/* Card styling for rounded corners and transition */
.login-card {
  border-radius: 20px;              /* Rounded edges */
  transition: transform 0.5s ease, box-shadow 0.5s ease;  /* Smooth animation on transform & shadow */
}

/* On hover, scale card slightly and add shadow */
.login-card:hover {
  transform: scale(1.02);           /* Slightly bigger */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Soft shadow */
}

/* Button animation: smooth scaling on press */
.login-button {
  transition: transform 0.2s ease;  /* Smooth scaling */
}

/* When button is pressed */
.login-button:active {
  transform: scale(0.98);           /* Slightly smaller to simulate press */
}

/* Initial fade-in animation for the login form column */
.login-animate {
  opacity: 0;                      /* Start invisible */
  transform: translateY(20px);    /* Start slightly down */
  animation: fadeInUp 0.6s ease forwards;  /* Animate to visible and original position */
}

/* Keyframes for fade-in and slide-up */
@keyframes fadeInUp {
  to {
    opacity: 1;                   /* Fully visible */
    transform: translateY(0);    /* Move to original position */
  }
}
</style>
