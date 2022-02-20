
import { ipcRenderer } from 'electron'

class CiderPluginTemplate {
  constructor() {
      // Setting up a ipcRenderer channel for back end to communicate with
      ipcRenderer.on("plugin.backendComm", (event, message) => {
          // Alert popup
          bootbox.alert(`Backend says: ${message}`)
      })

      // Saying hello to the backend
      ipcRenderer.invoke("plugin.frontendComm", "Hello from the frontend!")
  }
}


new CiderPluginTemplate()