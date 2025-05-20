<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer" color="deep-purple accent-4" dark>
      <v-list>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" />
        <v-list-item prepend-icon="mdi-account" title="Profile" />
        <v-list-item prepend-icon="mdi-logout" title="Logout" @click="logout" />
      </v-list>
    </v-navigation-drawer>

    <!-- Top App Bar -->
    <v-app-bar app color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>My Dashboard</v-toolbar-title>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container class="py-6">
        <transition name="fade">
          <v-card v-if="userStats" class="pa-4 mb-6" elevation="4">
            <v-card-title>User Stats</v-card-title>
            <v-card-text>
              <user-stats-chart :data="userStats.data" :labels="userStats.labels" />
            </v-card-text>
          </v-card>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UserStatsChart from '@/components/UserStatsChart.vue';

export default {
  name: 'DashboardPage',
  components: {
    UserStatsChart
  },
  data() {
    return {
      drawer: true,
      userStats: null
    }
  },
  created() {
    this.fetchUserStats();
  },
  methods: {
    async fetchUserStats() {
      // Simulated async API call; replace with real API call
      setTimeout(() => {
        this.userStats = {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          data: [12, 19, 3, 5, 8]
        };
      }, 1000);
    },
    logout() {
      // Add logout logic (clear auth, redirect, etc.)
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
