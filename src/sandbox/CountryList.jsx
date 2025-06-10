import { Box, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import useCountries from "../hooks/useCountries"


function CountryList() {
    const { handleChange, filCountries } = useCountries()

    return (
        <>
            <TableContainer component={Paper} >

                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>country common name</TableCell>
                            <TableCell align="right">country official name</TableCell>
                            <TableCell align="right">country flag</TableCell>
                            <TableCell align="right">country capital</TableCell>
                            <TableCell align="right">region</TableCell>
                            <TableCell align="right">index</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filCountries.map((c, i) => (
                            <TableRow
                                key={c.name.official}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{c.name.common} </TableCell>

                                <TableCell align="right">{c.name.official}</TableCell>

                                <TableCell align="right"><img style={{
                                    width: "50px", height: "50px", objectFit: "contain", borderRadius: "4px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
                                }} src={c.flags.png} alt={c.name.common} /></TableCell>

                                <TableCell align="right">{c.capital}</TableCell>

                                <TableCell align="right">{c.region}</TableCell>

                                <TableCell align="right">{i}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default CountryList