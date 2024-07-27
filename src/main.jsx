import { createRoot } from 'react-dom/client'
// import App from './App'
import Leaflet from './pages/Leaflet'

import './css/styles.css'

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<Leaflet />)
