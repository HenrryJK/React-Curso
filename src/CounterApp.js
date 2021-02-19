// rafcp   --- este comando usa y te importa todo eso ya armado
import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({values}) => {
    return (
        <>
           < h1>CounterApp</h1>
            <h2> { values } </h2>
        </>
    )
}

CounterApp.propTypes = {
    values: PropTypes.number
}

export default CounterApp
