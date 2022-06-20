import React,{useState} from 'react'
import "./TextForm.css"

export default function TextForm(props) {
    const btnClick = () =>{
        let newtext = text.toUpperCase()    // it will convert to upper case 
        setText(newtext)   // this change will occur
        props.showAlert("Converted TO UpperCase","success")
    }
    const clear = () =>{
        let newtext = ''    // it will convert to upper case 
        setText(newtext)   // this change will occur
    }

    const copyText = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const extSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }

    const textChange = (event) =>{
        setText(event.target.value)     // it will let us type in textarea,event occur will make change in textarea
    }
    const [text,setText] = useState("Enter text Here")  // it will make change to previous state
    //setText("ihberbvjnv kjbniu b")                      // this change will occur

    return (
        <>
        <div style={props.mode}>
        <h3>Enter Text Here-</h3>
        <div className='div123'>
            <textarea className="form-control" id='mybox' rows="7" cols="10" value={text} onChange={textChange}></textarea>
        </div>
        <div className="divbtn">
        <button className="btn btn-primary btn1"  onClick={btnClick} >Convert To UpperCase</button>
        <button className="btn btn-primary" onClick={clear} >Clear</button>
        <button className="btn btn-success mx-2" onClick={copyText} >Copy Text</button>
        <button className="btn btn-success mx-2" onClick={extSpace} >Remove Extra Space</button>
        </div>
        </div>
        <div>
        <div className="mb-5 container1">
            <h2>Your Text Summary</h2>
            <p>Words = {text.split(" ").length}, Characters = {text.length}</p>
        </div>
        </div>
        </>
    )
}
