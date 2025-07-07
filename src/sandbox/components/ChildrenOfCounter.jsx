import { Typography } from '@mui/material'
import React, { memo } from 'react'

function ChildrenOfCounter({ sentence }) {
    console.log("times that i rendered");

    return (
        <div>
            this is from children component
            <Typography>{sentence}</Typography>
        </div>
    )
}

export default memo(ChildrenOfCounter) 