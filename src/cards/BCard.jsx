import { Card, CardMedia, useTheme } from "@mui/material";
import BCardsBody from "./BCardsBody";
import BCardsFooter from "./BCardsFooter";

function BCard({ card, toggleLike }) {
    const theme = useTheme();

    return (
        <Card
            sx={{
                width: 280,
                mx: 2,
                my: 2,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 4,
                backgroundColor: theme.palette.background.paper,
                transition: "transform 0.2s",
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6
                }
            }}
        >
            <CardMedia
                sx={{ height: 170 }}
                image={card.image.url}
                title="Business logo"

            />
            <BCardsBody
                title={card.title}
                subtitle={card.subtitle}
                bizNumber={card.bizNumber}
                phone={card.phone}
                city={card.address.city}
                web={card.web}
            />
            <BCardsFooter cardId={card._id} cardPhone={card.phone} likes={card.likes} toggleLike={toggleLike} />
        </Card>
    );
}

export default BCard;
