import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, CardActions, IconButton } from "@mui/material";
import { deleteCard } from "../services/apiCallService";
import { useState } from "react";



function BCardsFooter({ card, toggleLike, cardId }) {
    const [isLike, setIsLike] = useState(likes.includes(user?._id))

    return (
        <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
            disableSpacing
        >
            <Box>
                <IconButton onClick={() => deleteCard(card._id)}>
                    <DeleteIcon />
                </IconButton>

                <IconButton>
                    <EditIcon />
                </IconButton>
            </Box>

            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>

                <IconButton color={likes.includes(user?._id) ? "error" : ""} onClick={setIsLike((prev) => !prev)}>
                    <FavoriteIcon toggleLike={toggleLike} cardId={cardId} />
                </IconButton>
            </Box>
        </CardActions>
    );
}

export default BCardsFooter;