import { useState } from 'react'
import './App.scss'
const ipc = require('electron').ipcRenderer;

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
        <button onClick={() => {
            ipc.once('actionReply', (event, response) => {
                console.log({response});
            });
            ipc.send('openSfBayRelief');
        }}>Hello</button>
    </div>
  )
}

export default App
