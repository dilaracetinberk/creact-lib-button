import React from 'react'
import { Button } from 'creact-lib-button'
import 'creact-lib-button/dist/index.css'


const App = () => {
  return (
    <div>
    <br /><br />
    <Button text="Default Button " type="default"/>
    <br /><br />
    <Button text="Dashed Button" type="dashed"/>
    <br /><br />
    <Button text="Primary Button" type="primary"/>
    <br /><br />
    <Button text="Link Button" type = "link"/>
  </div>
  )
}

export default App
