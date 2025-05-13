// ✅ Import Vue's createApp method to start the app
import { createApp } from 'vue'

// ✅ Import the root App component
import App from './App.vue'

// ✅ Import Vue Router setup from your router folder
import router from './router'

// ✅ Import Vuetify styles (required)
import 'vuetify/styles'

// ✅ Import Vuetify factory and its components/directives
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ✅ Create a Vuetify instance using all components and directives
const vuetify = createVuetify({
  components,
  directives,
})

// ✅ Create the Vue app, apply Vuetify and Vue Router, and mount it to the page
createApp(App)
  .use(vuetify) // Use Vuetify for UI
  .use(router)  // Use Vue Router for navigation
  .mount('#app') // Attach app to <div id="app"> in index.html
