<template>
  <!-- Full-height layout with background -->
  <v-container fluid class="dashboard-background fill-height">
    <!-- App Bar at the top -->
    <v-app-bar color="primary" dark flat>
      <v-toolbar-title>My App Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout" text>Logout</v-btn>
    </v-app-bar>

    <!-- Dashboard content -->
    <v-row class="pa-6" align="center" justify="center">
      <!-- Welcome message -->
      <v-col cols="12">
        <h2 class="text-center text-white font-weight-medium">
          Welcome back, {{ userName }}! 🎉
        </h2>
      </v-col>

      <!-- Dashboard cards -->
      <v-col cols="12" sm="6" md="4">
        <v-card class="dashboard-card" elevation="8">
          <v-card-title>Statistics</v-card-title>
          <v-card-text>
            <p>You have 24 new messages.</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="dashboard-card" elevation="8">
          <v-card-title>Profile</v-card-title>
          <v-card-text>
            <p>Edit your preferences or profile information.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import auth from '../auth'  // Use your auth module

export default {
  name: 'DashboardPage',
  data() {
    return {
      userName: 'User'  // Static for now; can be dynamic later
    }
  },
  methods: {
    logout() {
      auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
/* Background gradient for dashboard */
.dashboard-background {
  background: linear-gradient(135deg, #764ba2, #667eea);
  color: white;
}

/* Card style */
.dashboard-card {
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.dashboard-card:hover {
  transform: translateY(-5px);
}
</style>
