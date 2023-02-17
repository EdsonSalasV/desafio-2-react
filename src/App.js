import React, { useState } from 'react'
import Alert from './components/Alert'
import Login from './components/Login'

const App = () => {
  const [alert, setAlert] = useState({mgs: '', color: ''})

  return (
    <div>
      <Login setAlert={setAlert} />

      <Alert alert={alert}/>
    </div>
  )
}

export default App
