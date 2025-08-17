// src/layouts/components/Footer.jsx
import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../Routes/routesDict";
import { useCurrentUser } from "../../providers/UserProvider";

// MUI icons
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function Footer() {
    const navigate = useNavigate();
    const { user } = useCurrentUser();

    const isAdmin = !!user?.isAdmin;
    const isBusiness = !!user?.isBusiness;

    const baseButtonStyles = {
        color: "white",
        border: "2px solid white",
        fontWeight: 600,
        borderRadius: "25px",
        px: 3,
        py: 1,
        textTransform: "uppercase",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.15)",
            borderColor: "#f1f1f1",
        },
    };

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#2ecc71",
                py: 3,
                px: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                boxShadow: "0px -2px 12px rgba(0,0,0,0.25)",
                flexWrap: "wrap",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1200,
            }}
        >
            <Button
                variant="outlined"
                startIcon={<HomeIcon />}
                sx={baseButtonStyles}
                onClick={() => navigate(ROUTES.root)}
            >
                Home
            </Button>

            <Button
                variant="outlined"
                startIcon={<InfoOutlinedIcon />}
                sx={baseButtonStyles}
                onClick={() => navigate(ROUTES.about)}
            >
                About
            </Button>

            {(isAdmin || isBusiness) && (
                <Button
                    variant="outlined"
                    startIcon={<CreditCardIcon />}
                    sx={baseButtonStyles}
                    onClick={() => navigate(ROUTES.myCards)}
                >
                    My Cards
                </Button>
            )}
        </Box>
    );
}

export default Footer;
