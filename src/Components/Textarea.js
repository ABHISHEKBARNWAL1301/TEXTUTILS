import React, {useState} from 'react'

export default function Textarea(props) {
    const [Text, setText] = useState("");

    const handelOnChange = (e) =>{
        setText(e.target.value);
    }

    const handelUpClick = () =>{
        const newText = Text.toUpperCase();
        setText(newText);
    }

    const handelLoClick = () =>{
        const newText = Text.toLowerCase();
        setText(newText);
    }
    const handelClearClick = () =>{
        const newText = '';
        setText(newText);
    }

    const handleReverse = (event) => {
        let strArr = Text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
      }
    
    const handleExtraSpaces = ()=>{
        let newText = Text.replace(/\s+/g, '').trim();
        setText(newText)
    }

    return (  
        <>   
        <div className='container'>
          <div className="mb-3">
          <h3 className = {`text-${props.mode==='light'?'dark':'light'}`}>Enter Text</h3>
           <textarea value = {Text} onChange={handelOnChange} className="form-control" id="myBox" rows="8"></textarea>
          </div> 
          <button className="btn btn-primary mx-1" onClick={handelUpClick} type="submit">Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handelLoClick} type="submit">Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} type="submit">Remove Extra Spaces</button>
          <button className="btn btn-primary mx-1" onClick={handleReverse} type="submit">Reverse Text</button>
          <button className="btn btn-primary mx-1" onClick={handelClearClick} type="submit">Clear Text</button>
        </div>
        <div className="container my-3">
            <h4 className = {`my-1 text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h4>
             <p className = {`text-${props.mode==='light'?'dark':'light'}`}>{Text.split(" ").length} words and {Text.length} characters</p> 
             <p className = {`text-${props.mode==='light'?'dark':'light'}`}>{Math.round(Text.length/500)} minutes read</p>
        </div>
        </> 

    )
}
