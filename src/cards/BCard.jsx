import { Card, CardMedia } from "@mui/material";
import BCardsBody from "./BCardsBody";
import BCardsFooter from "./BCardsFooter";

function BCard({ card, toggleLike }) {
    return (
        <Card sx={{ Width: 250, mx: 2, margin: 2 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={card.image.url}
                title="Businees logo"
            />
            <BCardsBody
                title={card.title}
                subtitle={card.subtitle}
                bizNumber={card.bizNumber}
                phone={card.phone}
                city={card.address.city}
            />
            <BCardsFooter card={card} toggleLike={toggleLike} cardId={card._id} />
        </Card>
    );
}

export default BCard;