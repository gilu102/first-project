import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { deleteCard, getCardById } from "../services/apiCallService";
import { useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { useSnackBar } from "../providers/SnackBarProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../Routes/routesDict";

function BCardsFooter({ toggleLike, cardId, likes, cardPhone }) {
    const navigate = useNavigate()
    const { showSnackBar } = useSnackBar()
    const { user } = useCurrentUser();
    const [isLike, setIsLike] = useState(likes.includes(user?._id));

    if (user.isAdmin) {
        return (<CardActions sx={{ display: "flex", justifyContent: "space-between", px: 2, pb: 2 }}>
            <Box>
                <IconButton onClick={() => deleteCard(cardId)} color="error">
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => navigate(ROUTES.updatecard + cardId)} color="primary">
                    <EditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton color="success" onClick={() => showSnackBar(`${cardPhone}`, 'success')}>
                    <CallIcon />
                </IconButton>
                <IconButton
                    onClick={() => {
                        setIsLike((prev) => !prev);
                        toggleLike(cardId);
                    }}
                >
                    <FavoriteIcon color={isLike ? "error" : "inherit"} />
                </IconButton>
            </Box>
        </CardActions>)
    } else if (user.isBusiness || user) {
        return (
            <CardActions sx={{ display: "flex", justifyContent: "space-between", px: 2, pb: 2 }}>
                <Box>
                    <IconButton color="success" onClick={() => showSnackBar(`${cardPhone}`, 'success')}>
                        <CallIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton
                        onClick={() => {
                            setIsLike((prev) => !prev);
                            toggleLike(cardId);
                        }}
                    >
                        <FavoriteIcon color={isLike ? "error" : "inherit"} />
                    </IconButton>
                </Box>
            </CardActions>)
    }




    return (
        <CardActions sx={{ display: "flex", justifyContent: "center", px: 2, pb: 2 }}>

            <IconButton color="success" onClick={() => showSnackBar(`${cardPhone}`, 'success')}>
                <CallIcon />
            </IconButton>

        </CardActions>
    );
}

export default BCardsFooter;
