import { CardContent, Divider, Link, Typography } from "@mui/material";

function BCardsBody({ title, subtitle, phone, city, bizNumber, web }) {
    return (
        <CardContent>
            <Typography variant="h6" fontWeight={700} gutterBottom>
                {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {subtitle}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
                📞 <strong>{phone}</strong>
            </Typography>
            <Typography variant="body2">
                📍 <strong>{city}</strong>
            </Typography>
            <Link href={web} variant="body2" color="inherit"> go to our website her</Link>
            <Typography variant="caption" display="block" color="text.secondary" mt={1}>
                Card #{bizNumber}
            </Typography>
        </CardContent>
    );
}

export default BCardsBody;