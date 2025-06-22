import React from 'react'

function GrandChild({ message }) {

    return (
        <>
            <p>this is grandchild component</p>
            <h4>this is message from parent {message}</h4>
        </>
    )
}

export default GrandChild