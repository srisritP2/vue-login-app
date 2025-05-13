<template>
  <v-container>
    <h1>Welcome to the Dashboard!</h1>
    <v-btn color="primary" @click="goBack">Logout</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'DashboardPage',
  methods: {
    // Navigate back to the login page
    goBack() {
      this.$router.push('/login');
    }
  }
}
</script>
