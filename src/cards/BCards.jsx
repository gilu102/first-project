import BCard from "./BCard";
import { Box, Typography } from "@mui/material";

function BCards({ cards, toggleLike }) {
    if (cards.length === 0) {
        return (
            <Box sx={{ textAlign: "center", py: 5 }}>
                <Typography variant="h6">...ממתין לכרטיסים</Typography>
            </Box>
        );
    }
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                px: 2,
                py: 4
            }}
        >
            {cards ? cards.slice(0, 10).map((card) => (
                <BCard key={card._id} card={card} toggleLike={toggleLike} />
            )) : <div>error loading cards!${<br></br>}please contact administrator</div>}
        </Box>
    );
}

export default BCards;