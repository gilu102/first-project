import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackBarContext = createContext();


export function useSnackBar() {
    return useContext(SnackBarContext);
}

export default function SnackBarProvider({ children }) {
    const [snack, setSnack] = useState({
        open: false,
        message: '',
        severity: 'info',
        duration: 6000
    });

    const showSnackBar = (message, severity = 'info', duration = 6000) => {
        setSnack({ open: true, message, severity, duration });
    };

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') return;
        setSnack((s) => ({ ...s, open: false }));
    };

    return (
        <SnackBarContext.Provider value={{ showSnackBar }}>
            {children}
            <Snackbar
                open={snack.open}
                autoHideDuration={snack.duration}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity={snack.severity}
                    sx={{ width: '100%' }}
                    variant="filled"
                >
                    {snack.message}
                </Alert>
            </Snackbar>
        </SnackBarContext.Provider>
    );
}
