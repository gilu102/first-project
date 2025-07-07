import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ChildrenOfCounter from './ChildrenOfCounter'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Typography>{count}</Typography>
            <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
            <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
            <ChildrenOfCounter sentence={count < 10 ? "the count under 10" : "count above 10"} />
        </div>
    )
}

export default Counter