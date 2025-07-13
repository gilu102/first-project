import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, CardActions, IconButton } from "@mui/material";
import { deleteCard } from "../services/apiCallService";
function BCardsFooter({ card }) {
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

                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    );
}

export default BCardsFooter;