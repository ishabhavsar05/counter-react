import { useState } from 'react'
import './counter.css'

function Counter()
{
    const[value, setValue] = useState(0)

    const increment = () =>
        {
          setValue(value + 1)
        }
    const reset = () =>
        {
          setValue(0)
        }
    const decrement = () =>
        {
          setValue(value - 1)
        }
    return(
    <>
        <h1>COUNTER</h1>
        <h1> {value} </h1>
        <button className='btn1' onClick = {decrement} disabled = {value==0}>Decrement</button>
        <button className='btn2' onClick = {reset}>Reset</button>
        <button className='btn3' onClick = {increment} >Increment</button>

    </>
    )
   
}

export default Counter