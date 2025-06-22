import React from 'react'
import Child from './Child'

function Parent() {
    const hello = "hellow world"
    return (
        <>
            <p>this is parent component</p>
            <Child message={hello} />
        </>
    )
}


export default Parent