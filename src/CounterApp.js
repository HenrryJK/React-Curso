// rafcp   --- este comando usa y te importa todo eso ya armado
import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({values}) => {
    //handeAdd
    const handleAdd = (e) => {
        console.log(e);
    }
    const FollowResponse = (e) => {
       return () => console.log('Hello World!!')
    }

    return (
        <>
           < h1>CounterApp</h1>
            <h2> { values } </h2>
        <button onClick={(e) =>{handleAdd(e)}}>+1</button>

        <button onClick={handleAdd}>I like !</button>
        <button onClick={FollowResponse()}>Join Us !</button>
        </>
    )
}

CounterApp.propTypes = {
    values: PropTypes.number
}

export default CounterApp
