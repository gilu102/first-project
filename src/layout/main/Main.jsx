import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '../../providers/CustomThemeProvider';

function Main({ children }) {
    const { isDark } = useTheme();

    return (
        <Box
            sx={{
                color: isDark ? "white" : "black",
                backgroundColor: isDark ? "#2c3e50" : "#fdfdfd",
                minHeight: "80vh",
                padding: 3
            }}
        >
            {children}
        </Box>
    );
}

export default Main;
