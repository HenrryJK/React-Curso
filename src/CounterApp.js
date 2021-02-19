// rafcp   --- este comando usa y te importa todo eso ya armado
import React , {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({values = 10}) => {
   // const state = useState('Welcome user Henrry13_HK');
    const [counter ,setCounter ] = useState(values);
   
    //handeAdd
    const handleAdd = () => {
       setCounter(counter + 1);
     // setCounter ((c) => c +1)
    }

    const handleReset = () => {
        setCounter(values);
      // setCounter ((c) => c +1)
     }

     const handleDelete = () => {
        setCounter(counter - 1);
      // setCounter ((c) => c +1)
     }
    const FollowResponse = (e) => {
       return () => console.log('Hello World!!')
    }

    return (
        <>
           < h1>CounterApp</h1>
            <h2> { counter } </h2>

        <button onClick={(e) =>{handleAdd(e)}}>+1</button>

        <button onClick ={(e) => {handleReset(e)}}>Reset</button>

        <button onClick={(e) => {handleDelete(e)}}>-1</button>

        <button onClick={handleAdd}>I like !</button>
        <button onClick={FollowResponse()}>Join Us !</button>
        </>
    )
}

CounterApp.propTypes = {
    values: PropTypes.number
}

export default CounterApp
