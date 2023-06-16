import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to upeercase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to lowercase","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("All texts cleared","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const wordCount=(str)=>{
        let a=0;
        for(let i=0;i<str.split(" ").length;i++){
            if(str.split(" ")[i]!=="")a++;
        }
        return a;
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:  props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Converet to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Converet to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{wordCount(text)} words and {text.length} characters</p>
            <p>{0.008*wordCount(text)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length===0?"Enter something to preview":text}</p>
        </div>
        </>
        
  )
}
