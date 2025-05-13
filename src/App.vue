<template>
  <v-app>
    <!-- Use v-slot for router-view to correctly apply transition -->
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'  // Default transition (if no transition is set in route)
    }
  },
  watch: {
    // Watch route change and update transition name
    $route(to, from) {
      console.log('Navigating from:', from.name, 'to:', to.name);
      
      // Log the transition name to verify it's being set correctly
      console.log('Transition name:', to.meta.transition);

      // Set the transition name based on the route metadata or default to 'fade'
      this.transitionName = to.meta.transition || 'fade';  // Default transition is 'fade'
    }
  }
}
</script>

<style scoped>
/* Slide from right (Login -> Dashboard) */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.4s ease;
}
.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide from left (Dashboard -> Login) */
.slide-left-enter-active, .slide-left-leave-active {
  transition: all 0.4s ease;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Fade transition (fallback) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
