// 🔧 Import Vue's core method to create the application instance
import { createApp } from 'vue'

// 🌱 Import the root component which bootstraps the app
import App from './App.vue'

// 🚦 Import the router instance to handle navigation between views
import router from './router'

// 🎨 Import Vuetify's required styles
import 'vuetify/styles'

// 🔌 Import Vuetify's plugin setup: factory method, UI components, and directives
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 🧩 Import Material Design Icons CSS (used for Vuetify icons)
import '@mdi/font/css/materialdesignicons.css'

// 🛠️ Create a Vuetify instance with all components and directives registered
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Set default icon font to Material Design Icons
  },
})

// 🚀 Create the Vue app instance, register Vuetify and Vue Router, then mount it
createApp(App)
  .use(vuetify) // Enable Vuetify UI library
  .use(router)  // Enable Vue Router
  .mount('#app') // Mount the app to <div id="app"> in public/index.html
