import './style.css'
import {createRoot} from 'react-dom/client'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'


const root = createRoot(document.getElementById('app'))
root.render(<p>Hola!</p>)
