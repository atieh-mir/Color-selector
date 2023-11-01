import { useState } from 'react'
import {Selector} from './components/Selector'
import { ColorBox } from './components/ColorBox';

function App() {
  const [color, setColor] = useState(false)

 const handleOnChange =(e) =>{
   
      console.log(e.target.value);
     
     setColor(e.target.value);
  }

  return (
    <div className='container'>
      <Selector 
      onChangeSelect={handleOnChange}
      />
     <ColorBox
      colorBox={color} 
      />
    
    </div>
  )
}

export default App
