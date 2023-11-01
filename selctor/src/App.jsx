import { useState } from 'react'
import { clsx } from 'clsx';


function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)

 const handleOnChange =(e) =>{
   
      console.log(e.target.value);
     
     setColor(e.target.value);
  }

  return (
    <>
    <label for="color-box">  Choose a color:</label>
     <select onClick={handleOnChange} name="color" id="color-box" >
     <option value="">--Please choose an option--</option>
      <option value="red-box">red</option>
      <option value="green-box">green</option>
      <option  value="blue-box">blue</option>
      <option  value="yellow-box">yellow</option>
      <option  value="black-box">black</option>
      
        
     </select>
     <div className={color}
     ></div>
    
    </>
  )
}

export default App
