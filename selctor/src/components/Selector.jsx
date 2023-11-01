

export const Selector = ({onChangeSelect}) => {

    return(
        <div className="container-select">
            <h1 className="tag-h1">Choose a color: </h1>
     <select onClick={onChangeSelect} name="color" id="color-box" className="selctor-box" >
     <option value="">Please choose an option</option>
      <option value="red-box">red</option>
      <option value="green-box">green</option>
      <option  value="blue-box">blue</option>
      <option  value="yellow-box">yellow</option>
      <option  value="black-box">black</option>  
     </select>
        </div>
    )
}