import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, CardActions, IconButton } from "@mui/material";
import { deleteCard, updateCard } from "../services/apiCallService";
import { useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";



function BCardsFooter({ toggleLike, cardId, likes }) {
    const { user } = useCurrentUser()
    const [isLike, setIsLike] = useState(likes.includes(user?._id))

    return (
        <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
            disableSpacing
        >
            <Box>
                <IconButton onClick={() => deleteCard(cardId)}>
                    <DeleteIcon />
                </IconButton>

                <IconButton onClick={updateCard}>
                    <EditIcon />
                </IconButton>
            </Box>

            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>

                <IconButton
                    onClick={() => {
                        setIsLike((prev) => !prev);
                        toggleLike(cardId);
                    }}
                >
                    <FavoriteIcon color={isLike ? "error" : ""} />
                </IconButton>
            </Box>
        </CardActions>
    );
}

export default BCardsFooter;