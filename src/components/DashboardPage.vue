<template>
  <v-container>
    <h1>Welcome to the Dashboard!</h1>
    <v-btn color="primary" @click="goBack">Logout</v-btn>
  </v-container>
</template>

<script>
import auth from '../auth'


export default {
  name: 'DashboardPage',
  methods: {
    goBack() {
      auth.logout()  // Log out the user
      this.$router.replace('/login')  // Use replace to avoid navigating back to dashboard
    }
  }
}
</script>

