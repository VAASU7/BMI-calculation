import React,{useState} from 'react'
import './App.css'


function App  ()  {

const [weight, setWeight] = useState(0)
const [height, setHeight] = useState(0)
const [bmi, setBmi] = useState('')
const [message, setMessage] = useState('☺️')


let calcBmi = (event) =>{
  event.preventDefault()

  if(weight === 0 || height === 0){
    alert('Please Eneter A Valid Weight And Height')
  }else{
    let bmi = (weight /(height * height) *703)
    setBmi(bmi.toFixed(1))

    //notification

    if(bmi < 25){
      setMessage('You Are Under Weight')
    }else if (bmi >=25 && bmi < 30){
      setMessage('You Have A Healthy Weight')
    } else{
      setMessage('You Are Over Weight')
    }

  }
}

let imgsrc;

if (bmi < 1){
  imgsrc = null
}else{
  if(bmi < 25){
    imgsrc = require('../src/assets/underweight.png')
  }else if(bmi >=25 && bmi <30){
    imgsrc = require('../src/assets/healthy.png')
  } else{
    imgsrc = require('../src/assets/overweight.png')
  }
}


let reload = () =>{
  window.location.reload()
}

  return (
    <div className='App'>
      <div className='container'>
        <h2 className='center'>
          BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs)</label>
            <input value={weight} onChange={(event)=>
            setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height(in)</label>
            <input value={height}  onChange={(event)=>
            setHeight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit' >Submit</button>
            <button className='btn change-btn' onClick={reload} type='submit'>Reload </button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgsrc} alt=''></img>
        </div>
      </div>
      
    </div>
  )
}

export default App
