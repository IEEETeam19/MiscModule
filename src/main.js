import './app.css'
import App from './lib/App.svelte'

// import Main from './routes/index.svelte'
const app = new App({
  target: document.getElementById('app'),
})

export default app
