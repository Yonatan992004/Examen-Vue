// Importa el archivo CSS principal para aplicar estilos a la aplicación.
import './assets/main.css'

// Importa la función "createApp" de Vue para crear la instancia de la aplicación.
import { createApp } from 'vue'
import App from './App.vue'// Importa el componente raíz de la aplicación.
import router from './router'// Importa el enrutador que gestionará las rutas de la aplicación.

const app = createApp(App)// Crea una instancia de la aplicación Vue.

app.use(router)// Usa el enrutador importado en la aplicación.

app.mount('#app')// Monta la aplicación en el elemento con el ID "app" en tu archivo HTML.
