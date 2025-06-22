import React from 'react'
import GrandChild from './GrandChild'

function Child({ message }) {
    return (
        <>
            <p> this is child component</p>
            <GrandChild message={message} />
        </>
    )
}

export default Child